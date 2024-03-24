import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import { setUser } from "../Service/service.js";

import bcrypt from "bcryptjs";

export const Register = async (req, res) => {
  const { name, email, password, role, photo, gender } = req.body;

  try {
    let user = null;

    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    }

    if (user) {
      return res.status(400).json({
        message: "User already Exists",
      });
    }

    const salt = await bcrypt.genSalt(10);

    console.log(salt)

    const hashpassword = await bcrypt.hash(password, salt);

    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashpassword,
        photo,
        gender,
        role,
      });
    }
    if (role === "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashpassword,
        photo,
        gender,
        role,
      });
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: `${user.role} sucessfully Created`,
    });
  } catch (error) {}
  return res.status(500).json({
    success: false,
    message: "Some Error has Occured, try Again",
  });
};

export const Login = async (req, res) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    return res.status(400).json({
      success: false,
      message: "Please Enter the Credentials",
    });
  }

  try {
    let user = null;

    const patient = await User.findOne({ email });
    const doctor = await Doctor.findOne({ email });

    if (patient) {
      user = patient;
    }

    if (doctor) {
      user = doctor;
    }

    if (!user) {
      return res.status(400).json({
        sucesss: false,
        message: "User Does not Exist",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        sucesss: false,
        message: "Password Invalid! Please Enter again",
      });
    }

    const token = setUser(user);
    // console.log(token);

    const {
      email: userEmail,
      password: userPassword,
      role,

      ...rest
    } = user._doc;

    return res.json({
      message: "You have successfully logged In!",
      token: token,
      role: role,
      data: {
        ...rest,
      },
    });
  } catch (error) {
    return res.status(500).json({
      sucesss: false,
      Message: "Try again",
    });
  }
};

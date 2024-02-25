import jwt from "jsonwebtoken";
import { getUser } from "../Service/service.js";
import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const authenticate = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res.status(400).json({
      success: false,
      messgae: "No token found",
    });
  }

  try {
    const token = authToken.split(" ")[1];

    // console.log(token);

    const userToken = getUser(token);

    // console.log(userToken);

    req.userId = userToken._id;
    req.role = userToken.role;

    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "You token time has Expired",
      });
    }
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

export const restrictTo = (roles) => async (req, res, next) => {
  const userId = req.userId;
  // console.log(userId)

  let user;

  const patient = await User.findById(userId);
  const doctor = await Doctor.findById(userId);

  if (patient) {
    user = patient;
  }

  if (doctor) {
    user = doctor;
  }

  if (!roles.includes(user.role)) {
    return res.status(401).json({
      Success: false,
      Message: "You are not Authorized",
    });
  }

  next();
};

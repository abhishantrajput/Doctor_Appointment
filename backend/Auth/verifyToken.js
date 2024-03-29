
import { getUser } from "../Service/service.js";
import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const authenticate = (req, res, next) => {
  const authToken = req.headers.authorization;
  // console.log(authToken);

  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res.status(400).json({
      success: false,
      message: "No token found. Access Denied",
    });
  }

  try {
    const token = authToken.split(" ")[1];

    // console.log(token);

    const userToken = getUser(token);

    // console.log(userToken);

    // console.log("user Authenticating.........")

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
      message: "Please login ",
    });
  }
};

export const restrictTo = (roles) => async (req, res, next) => {
  const userId = req.userId;
  // console.log(userId);

  // console.log("Doctor Being Authorized");
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
      success: false,
      message: "You are not Authorized",
    });
  }

  next();
};

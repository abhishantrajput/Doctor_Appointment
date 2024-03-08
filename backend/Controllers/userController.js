import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select("-password");

    return res.status(200).json({
      Success: "true",
      message: "user Updated Successfully",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      Success: "False",
      message: "User doesn't exist",
    });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    return res.status(200).json({
      Success: "true",
      message: "user Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      Success: "False",
      message: "User Failed to Delete",
    });
  }
};
export const singleUserFind = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");

    return res.status(200).json({
      Success: "true",
      message: "user Found Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      Success: "False",
      message: "No user Could not be found",
    });
  }
};
export const allUsersFind = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");

    return res.status(200).json({
      Success: "true",
      message: "users Found Successfully",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      Success: "False",
      message: "No user Could not be found",
    });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,

        message: "user not Found",
      });
    }

    const { password, ...rest } = user._doc;

    return res.status(200).json({
      success: true,
      message: "profile info in getting Ready",
      data: { ...rest },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,

      message: "Internal Server Error",
    });
  }
};

export const getMyAllAppointments = async (req, res) => {
  try {
    // Step 1 : Retrieve Appointments form the Booking Model

    const bookings = await Booking.find({ user: req.userId });

    // Step 2 : Extract doctorsId from Appointments  Booking

    const doctorIDS = bookings.map((el) => el.doctor.id);
    // Step 3: Extract doctors using Extracted DoctorID's

    const doctors = await Doctor.find({ _id: { $in: doctorIDS } }).select(
      "-password"
    );

    return res.status(200).json({
      success: true,
      message: "Appointments are getting...",
      data: doctors,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went Wrong",
    });
  }
};

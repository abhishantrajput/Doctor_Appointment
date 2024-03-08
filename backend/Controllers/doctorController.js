import { populate } from "dotenv";
import Doctor from "../models/DoctorSchema.js";

import Booking from "../models/BookingSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select("-password");

    return res.status(200).json({
      Success: "true",
      Message: "Doctor Updated Successfully",
      data: updatedDoctor,
    });
  } catch (error) {
    return res.status(500).json({
      Success: "False",
      Message: "Doctor doesn't exist",
    });
  }
};
export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id);

    return res.status(200).json({
      Success: "true",
      Message: "doctor Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      Success: "False",
      Message: "Doctor Failed to Delete",
    });
  }
};
export const singleDoctorFind = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");

    return res.status(200).json({
      Success: "true",
      Message: "doctor Found Successfully",
      data: doctor,
    });
  } catch (error) {
    return res.status(500).json({
      Success: "False",
      Message: "No doctor Could not be found",
    });
  }
};
export const allDoctorsFind = async (req, res) => {
  try {
    const { query } = req.query;

    if (query) {
      let doctors;
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      const doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );

      return res.status(200).json({
        Success: "true",
        Message: "Doctors Found Successfully",
        data: doctors,
      });
    }
  } catch (error) {
    return res.status(500).json({
      Success: "False",
      Message: "No Doctors Could not be found",
    });
  }
};

export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;

  try {
    const doctor = await Doctor.find(doctorId);

    if (!doctor) {
      return res.status(400).json({
        success: false,
        message: "Doctor Not Found",
      });
    }

    const { password, ...rest } = doctor._doc;

    const appointments = await Booking.find({ doctor: doctorId });

    return res.status(200).json({
      success: true,
      message: "Doctor Information is getting...",
      data : {...rest,appointments}
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

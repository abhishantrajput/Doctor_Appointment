import Doctor from "../models/DoctorSchema.js";

import Review from "../models/ReviewSchema.js";

export const getAllReviews = async (req, res) => {
  try {
    const Reviews = await Review.find({});

    if (Reviews) {
      return res.status(200).json({
        success: true,
        message: "Reviews Found Successfully",
        reviews: Reviews,
      });
    }
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Reviews not Found ",
    });
  }
};

export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.userId;

  console.log(req.params);

  console.log(req.body.doctor);
  console.log("patient id",req.body.user);
  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();

    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: {
        reviews: savedReview._id,
      },
    });

    return res.status(200).json({
      success: true,

      message: "Review Successfully Submitted",

      data: savedReview,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,

      message: "Review Submission Failed",
    });
  }
};

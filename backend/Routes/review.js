import express from "express";

import {
  getAllReviews,
  createReview,
} from "../Controllers/reviewController.js";
import { authenticate, restrictTo } from "../Auth/verifyToken.js";

const router = express.Router({mergeParams: true});

router
  .route("/")
  .get(getAllReviews)
  .post(authenticate, restrictTo(["patient"]), createReview);

export default router;

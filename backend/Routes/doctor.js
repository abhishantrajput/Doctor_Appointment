import express from "express";

import {
  updateDoctor,
  allDoctorsFind,
  singleDoctorFind,
  deleteDoctor,
} from "../Controllers/doctorController.js";
import reviewRouter from "../Routes/review.js";
import { authenticate, restrictTo } from "../Auth/verifyToken.js";

const router = express.Router({mergeParams: true});

// ---------------Nested Route----------------------

router.use("/:doctorId/reviews", reviewRouter);

router.get("/", allDoctorsFind);
router.get("/:id", singleDoctorFind);
router.put("/:id", authenticate, restrictTo(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrictTo(["doctor"]), deleteDoctor);

export default router;

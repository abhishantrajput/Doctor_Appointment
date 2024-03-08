import express from "express";
import {
  updateUser,
  deleteUser,
  allUsersFind,
  singleUserFind,
  getUserProfile,
  getMyAllAppointments,
} from "../Controllers/userController.js";

import { authenticate, restrictTo } from "../Auth/verifyToken.js";

const router = express.Router();

router.get("/:id", authenticate, restrictTo(["patient"]), singleUserFind);
router.get("/", authenticate, restrictTo(["admin"]), allUsersFind);
router.put("/:id", authenticate, restrictTo(["patient"]), updateUser);
router.delete("/:id", authenticate, restrictTo(["patient"]), deleteUser);
router.get(
  "/profile/me",
  authenticate,
  restrictTo(["patient"]),
  getUserProfile
);
router.get(
  "/appointments/my-appointments",
  authenticate,
  restrictTo(["patient"]),
  getMyAllAppointments
);

export default router;

import express from "express";
import {
  updateUser,
  deleteUser,
  allUsersFind,
  singleUserFind,
} from "../Controllers/userController.js";

import { authenticate, restrictTo } from "../Auth/verifyToken.js";
const router = express.Router();

router.get("/:id", authenticate, restrictTo(["patient"]), singleUserFind);
router.get("/", authenticate, restrictTo(["admin"]), allUsersFind);
router.put("/:id", authenticate, restrictTo(["patient"]), updateUser);
router.delete("/:id", authenticate, restrictTo(["patient"]), deleteUser);

export default router;

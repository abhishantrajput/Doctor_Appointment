

import {Register,Login} from "../Controllers/authController.js"

import express from "express"


const router = express.Router();



router.post("/register",Register)
router.post("/login",Login)




export default router
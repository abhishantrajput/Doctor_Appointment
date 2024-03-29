import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";
import bookingRoute from "./Routes/booking.js"

import { MongoDB_Connection } from "./Database/Connection.js";

const app = express();
dotenv.config();

const corOptions = {
  origin: true,
};

const PORT = process.env.PORT || 8000;

// ----------------Important Middlewares-------------------

app.use(express.json());
app.use(cookieParser());
app.use(cors(corOptions));

// --------------------------Routes------------------------

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/bookings", bookingRoute);

MongoDB_Connection();
app.listen(PORT, () => {
  console.log(`Server Connected on Port ${PORT}`);
});

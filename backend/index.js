import express from "express";
import http from "http"; // Importing the 'http' module
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";
import bookingRoute from "./Routes/booking.js";
import { MongoDB_Connection } from "./Database/Connection.js";

const app = express();
dotenv.config();

const corOptions = {
  origin: true,
};

const PORT = process.env.PORT || 8000;

// Create an HTTP server instance using Express application
const server = http.createServer(app);

// Socket.IO server initialization
const io = new Server(server, {
  cors: corOptions,
});

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log(`Socket Connected`, socket.id);
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketidToEmailMap.set(socket.id, email);
    io.to(room).emit("user:joined", { email, id: socket.id });
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });
  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit("incomming:call", { from: socket.id, offer });
  });

  socket.on("call:accepted", ({ to, ans }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans });
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {
    console.log("peer:nego:needed", offer);
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    console.log("peer:nego:done", ans);
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });

  // Rest of your socket event handlers...
});

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corOptions));

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/bookings", bookingRoute);

// Database connection
MongoDB_Connection();

// Start the HTTP server
server.listen(PORT, () => {
  console.log(`Server Connected on Port ${PORT}`);
});

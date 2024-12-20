import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js";
import videoRoutes from "./routes/videos.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import User from "./models/User.js";

dotenv.config();
const app = express();
// app.post(
//   "/auth/google",
//   (req, res, next) => {
//     res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
//     res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
//     next(); // Pass control to the next middleware or route handler
//   },
//   googleAuth
// );

console.log("MongoDB URI:", process.env.MONGO);

const connect = async () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connect to db");
    })
    .catch((err) => {
      console.log("failed to connect");
      throw err;
    });
};

// app.get("/", (req, res) => {
//   console.log("Server is working");
//   res.send("Hello, World!");
// });
app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

// Route to fetch user by userId
app.get("/users/find/:userId", async (req, res) => {
  const userId = req.params.userId; // Get the userId from the request parameters
  try {
    const user = await User.findById(userId); // Find the user in the database using the userId
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user); // Send the user data back as JSON
  } catch (err) {
    res.status(500).send("Server Error");
  }
});
// Error handling middleware
//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// Connect to MongoDB and start the server

connect().then(() => {
  app.listen(8800, () => {
    console.log("connected to server");
  });
});

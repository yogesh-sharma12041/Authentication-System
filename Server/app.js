import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";
import authRouter from "./Routes/authRoutes.js";
import userRouter from "./Routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();

const allowedOrigins = [
  "https://authentication-system-yogesh-sharma12041s-projects.vercel.app",
  "https://authentication-system-git-main-yogesh-sharma12041s-projects.vercel.app",
  "https://authentication-system-fawn.vercel.app",
  "https://www.authentication-system-fawn.vercel.app",
  
];


app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// API Endpoints
app.get("/", (req, res) => {
  res.send("API Working...");
});
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`Server started on PORT : ${PORT}`));

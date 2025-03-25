import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";
import authRouter from "./Routes/authRoutes.js"
import userRouter from "./Routes/userRoutes.js"

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();

// const allowedOrigins = ['https://authentication-system-backend-4spv.onrender.com']

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'https://authentication-system-frontend-one.vercel.app',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true // If you're using cookies or authentication headers
}));

//API Endpoints
app.get("/", (req, res) => {
  res.send("API Working...");
});
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.listen(PORT, () => console.log(`Server started on PORT : ${PORT}`));

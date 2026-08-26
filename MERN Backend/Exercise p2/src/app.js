import express from "express";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import multer from "multer";

// creating server
const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
const upload = multer({ storage: multer.memoryStorage() })


// routes
app.use('/api/auth', authRoutes);


export default app;
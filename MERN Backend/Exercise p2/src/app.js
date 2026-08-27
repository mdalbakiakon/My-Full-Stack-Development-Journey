import express from "express";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import musicRoutes from "./routes/music.routes.js";

// creating server
const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
const upload = multer({ storage: multer.memoryStorage() })


// routes
app.use('/api/auth', authRoutes);
app.use('/api/music', upload.single('musicFile'), musicRoutes);

export default app;
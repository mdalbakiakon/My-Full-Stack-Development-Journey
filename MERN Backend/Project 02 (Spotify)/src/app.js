import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import musicRoutes from "./routes/music.routes.js";
import multer from "multer";

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

const upload = multer({
    storage: multer.memoryStorage(),
})

// routes
app.use('/api/auth', authRoutes);
app.use('/api/music', upload.single("musicFile"), musicRoutes)

export default app;
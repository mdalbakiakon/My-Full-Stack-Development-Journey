import express from "express";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import musicRoutes from "./routes/music.routes.js";
import albumRoutes from "./routes/album.routes.js";

// creating server
const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);
app.use('/api/album', albumRoutes);

export default app;
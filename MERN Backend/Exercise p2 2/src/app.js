import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import musicRoutes from "./routes/music.routes.js";


// initializing server
const app = express();


// middleware
app.use(express.json());
app.use(cookieParser());


// route
app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);

export default app;
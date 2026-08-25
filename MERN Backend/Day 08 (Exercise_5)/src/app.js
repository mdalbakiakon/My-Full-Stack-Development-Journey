import express from "express";
import coockieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";

const app = express();

// middleware
app.use(express.json());
app.use(coockieParser());

// routes
app.use('/api/auth', authRoutes);

export default app;
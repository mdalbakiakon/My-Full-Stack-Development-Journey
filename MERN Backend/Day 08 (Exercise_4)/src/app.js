import express from "express";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// middle ware
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);

export default app;
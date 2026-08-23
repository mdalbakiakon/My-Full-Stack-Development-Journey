import express from "express";
import authControllers from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/register', authControllers.registerUser);

export default router;
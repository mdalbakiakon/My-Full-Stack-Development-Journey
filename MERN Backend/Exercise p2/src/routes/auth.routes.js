import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

// post /signup -- register new user
router.post('/signup', authController.signupUser)

export default router;
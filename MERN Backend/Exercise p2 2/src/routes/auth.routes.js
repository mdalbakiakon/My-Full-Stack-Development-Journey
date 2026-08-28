import express from "express";
import authController from "../controllers/auth.controller.js";
import inputMiddleware from "../middlewares/input.middleware.js";

const router = express.Router();

router.post('/signup', inputMiddleware.inputValidation, authController.signupUser);

export default router;
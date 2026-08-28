import express from "express";
import authController from "../controllers/auth.controller.js";
import inputMiddleware from "../middlewares/input.middleware.js";

const router = express.Router();

// POST /api/auth/signup -- for signning up new user
router.post('/signup',inputMiddleware.isUserInputValid, authController.signupUser);

// POST /api/auth/login -- for user login
router.post('/login',inputMiddleware.isUserInputValid, authController.loginUser);


export default router;
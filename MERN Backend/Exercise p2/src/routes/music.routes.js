import express from "express";
import musicController from "../controllers/music.controller.js";

const router = express.Router();

// POST /create -- create music only authorized to artist role
router.post('/create', musicController.createMusic);

export default router;
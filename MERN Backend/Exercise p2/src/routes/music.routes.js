import express from "express";
import musicController from "../controllers/music.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import multer from "multer";

const router = express.Router();

const upload = multer({storage: multer.memoryStorage()})

// POST /create -- create music only authorized to artist role
router.post('/create', authMiddleware.authArtist, upload.single('musicFile'), musicController.createMusic);

export default router;
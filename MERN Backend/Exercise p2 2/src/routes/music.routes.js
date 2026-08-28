import express from "express";
import musicController from "../controllers/music.controller.js";
import multer from "multer";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

const upload = multer({storage: multer.memoryStorage()});

router.post('/create', authMiddleware.isUserArtist, upload.single('file'), musicController.createMusic);

export default router;
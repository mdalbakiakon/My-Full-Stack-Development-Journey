import express from "express";
import albumController from "../controllers/album.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post('/create', authMiddleware.authArtist, albumController.createAlbum);

export default router;
import albumModel from "../models/album.model.js";
import userFavoriteModel from "../models/favorite.model.js";
import musicModel from "../models/music.model.js";
import cloudUpload from "../services/storage.service.js";
import jwt from "jsonwebtoken";

const createMusic = async (req, res) => {
    try {

        const file = req.file;

        const result = await cloudUpload(file.buffer, file.mimetype);

        const newMusic = await musicModel.create({
            title: req.body.title,
            authorId: req.artistId,
            musicURL: result.secure_url,
            cloudinaryId: result.public_id
        })

        return res.status(201).json({
            status: 'success',
            message: 'music created successfully',
            newMusic: newMusic
        })
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            status: 'failed',
            message: 'something went wrong in music creation',
            error: err.message
        })
    }
}



const createAlbum = async (req, res) => {
    try {
        const newAlbum = await albumModel.create({
            title: req.title,
            authorId: req.artistId,
            musicList: req.cleanMusicList
        });

        return res.status(201).json({
            status: "success",
            message: "album created successfully",
            newAlbum: newAlbum
        });

    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            status: 'failed',
            message: 'something went wrong in album creation',
            error: err.message
        })
    }
}


const createFavorite = async (req, res) => {
    try {
        const favorite = req.body.musicList;
        const foundToken = req.cookies.NEW2_TOKEN;

        if (!foundToken) {
            return res.status(403).json({
                status: 'failed',
                message: 'unauthorized user'
            })
        }

        const decoded = jwt.verify(foundToken, process.env.JWT_SECRET);
        

        const newFavoriteList = await userFavoriteModel.findOneAndUpdate(
            { userId: decoded.id },
            { $addToSet: { favoriteList: { $each: favorite } } },
            { upsert: true, returnDocument: "after" }
        );

        return res.status(201).json({
            status: 'success',
            message: 'user favourite list created',
            favoriteList: newFavoriteList
        })

    } catch (error) {
        console.log(error.message);

        if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
            return res.status(403).json({
                status: 'failed',
                message: 'unauthorized user',
                error: error.message
            })
        }

        return res.status(500).json({
            status: 'failed',
            message: 'something went wrong while creating favorite list for user',
            error: error.message
        })
    }
}

export default { createMusic, createAlbum, createFavorite };
import musicModel from "../models/music.model.js";
import uploadFile from "../services/storage.service.js";
import jwt from "jsonwebtoken";

const createMusic = async (req, res) => {
    try {
        const existToken = req.cookies.SPOTIFY_TOKEN;

        if (!existToken) {
            return res.status(401).json({
                message: 'unauthorized user'
            })
        }

        const decoded = jwt.verify(existToken, process.env.JWT_SECRET);

        if (decoded.role !== "artist") {
            return res.status(403).json({
                message: 'no permission for creating music'
            })
        }

        const { title } = req.body;
        const musicFile = req.file;

        console.log(musicFile);

        const base64String = `data:${musicFile.mimetype};base64,${musicFile.buffer.toString('base64')}`;

        const musicURL = await uploadFile(base64String, musicFile.originalname);

        const newMusic = await musicModel.create({
            title: title,
            musicURL: musicURL.url,
            author: decoded.id
        })

        return res.status(201).json({
            message: 'music created successfully',
            newMusic
        })

    } catch (error) {
        console.log(error);

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                message: 'unauthorized user'
            })
        }

        return res.status(500).json({
            message: 'something went wrong'
        })
    }
}

export default { createMusic };
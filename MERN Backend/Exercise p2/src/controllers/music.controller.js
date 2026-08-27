import musicModel from "../models/music.model.js";
import jwt from "jsonwebtoken";
import uploadFile from "../services/storage.service.js";

// POST /api/music/create -- upload music only by artist role user
const createMusic = async (req, res) => {
    try {

        // checking for existing token
        const foundToken = req.cookies.EXERCISE_TOKEN;

        // decoding token and verifying if the user is artist or not
        const decoded = jwt.verify(foundToken, process.env.JWT_SECRET);

        // if listener role user try to create music
        if (decoded.role !== 'artist') {
            return res.status(403).json({
                message: 'unauthorized user'
            })
        }

        // input feed from user
        const { title } = req.body;
        const musicFile = req.file;


        // artist id from decoded
        const authorId = decoded.id;


        // if user hit form submit without any inputs
        if (!title || !musicFile) {
            return res.status(400).json({
                message: 'title and music file is required'
            })
        }

        // cloudinary response
        const result = await uploadFile(musicFile.buffer, musicFile.mimetype);

        // setting up secure_url
        const audioURL = result.secure_url;

        // database upload
        const newMusic = await musicModel.create({
            title,
            authorId,
            audioURL
        })

        // success response
        return res.status(201).json({
            message: 'music created successfully',
            music: newMusic
        })

    }
    catch (error) {
        console.log(error.message);

        // if found token is malformed
        if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({
                message: 'unauthorized user'
            })
        }

        // fallback error handle
        return res.status(500).json({
            message: 'something went wrong',
            error: error.message
        })
    }

}

export default { createMusic };
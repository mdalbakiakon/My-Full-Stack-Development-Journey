import musicModel from "../models/music.model.js";
import cloudUpload from "../services/storage.service.js";

// POST /api/music/create -- upload music only by artist role user
const createMusic = async (req, res) => {
    try {

        // input feed from user
        let { title } = req.body;
        const musicFile = req.file;

        title = title.trim();

        // if user hit form submit without any inputs
        if (!title || !musicFile) {
            return res.status(400).json({
                message: 'title and music file is required'
            })
        }

        // cloudinary response
        const result = await cloudUpload(musicFile.buffer, musicFile.mimetype);

        // database upload
        const newMusic = await musicModel.create({
            title: title,
            authorId: req.user.id,
            audioURL: result.secure_url
        })

        // success response
        return res.status(201).json({
            message: 'music created successfully',
            music: newMusic
        })

    }
    catch (error) {
        console.log(error.message);

        // fallback error handle
        return res.status(500).json({
            message: 'something went wrong',
            error: error.message
        })
    }

}

export default { createMusic };
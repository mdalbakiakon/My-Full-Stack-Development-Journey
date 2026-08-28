import musicModel from "../models/music.model.js";
import cloudUpload from "../services/storage.service.js";

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

export default { createMusic };
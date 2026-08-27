import albumModel from "../models/album.model.js";

// controller for creating album
const createAlbum = async (req, res) => {
    try {

        // fetching user input
        let {title, musicIds} = req.body;

        // trimming title to handle user empty input like "     "
        title = title.trim();

        // if empty input found
        if(!title || musicIds.length === 0){
            return res.status(400).json({
                message: "title and music id list required"
            })
        };

        // creating album with music ids array
        const newAlbum = await albumModel.create({
            title: title,
            authorId: req.user.id,
            musicList: musicIds
        })

        // success response
        return res.status(201).json({
            message: 'album created successfully',
            album: newAlbum
        })

    } catch (error) {
        console.log(error.message);

        // fallback error handling
        return res.status(500).json({
            message: 'something went wrong',
            error: error.message
        })
    }
}

export default { createAlbum };
import musicModel from "../models/music.model.js";


const validateAlbumMusicOwnership = async (req, res, next) => {
    
    const musicIdList = req.body.musicIdList;
    
    const validMusicList = [];

    for (const musicId of musicIdList) {

        const foundMusic = await musicModel.findById(musicId);

        if (!foundMusic) {
            console.log('music not found proceeding to next');
            continue;
        }

        if (foundMusic.authorId.toString() !== req.artistId.toString()) {
            return res.status(403).json({
                status: 'failed',
                message: `requested music list contains music of other artist`
            });
        }

        validMusicList.push(musicId);
    }

    req.title = req.body.title;
    req.cleanMusicList = validMusicList;
    next();
}

export default { validateAlbumMusicOwnership };
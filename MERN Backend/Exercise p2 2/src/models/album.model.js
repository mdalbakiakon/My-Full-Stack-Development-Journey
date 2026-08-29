import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'album title is required'],
        maxLength: [150, 'album title is too long']
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, 'artist id required']
    },
    musicList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "musics"
        }
    ]
}, {timestamps: true});


const albumModel = mongoose.model("albums", albumSchema);

export default albumModel;
import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exercise_users",
        required: true,
    },
    musicList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "exercise_musics"
        }
    ]
}, {timestamps: true});


const albumModel = mongoose.model("exercise_albums", albumSchema);

export default albumModel;
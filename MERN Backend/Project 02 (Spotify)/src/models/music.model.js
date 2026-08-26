import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        minLength: [1, 'title field can not be left empty'],
        maxLength: [30, 'title must be under 30 characters'],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "spotify_users",
        required: true,
    },
    musicURL: {
        type: String,
        required: true,
        trim: true,
        match: [/^https?:\/\/\S+$/, 'please enter a valid music URL'],
    }
});

const musicModel = mongoose.model("spotify_musics", musicSchema);

export default musicModel;
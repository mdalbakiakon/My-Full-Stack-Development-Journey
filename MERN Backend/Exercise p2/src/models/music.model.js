import mongoose from "mongoose";

// music schema
const musicSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'song title is required'],
        maxLength: [150, 'title must be under 150 characters']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exercise_users",
        required: [true, 'author is required']
    },
    audioURL:{
        type: String,
        trim: true,
        required: [true, 'audio file url is required'],
        match: [/^https?:\/\/\S+$/, "invalid url"],
    }
}, {timestamps: true});

const musicModel = mongoose.model("exercise_musics", musicSchema);

export default musicModel;
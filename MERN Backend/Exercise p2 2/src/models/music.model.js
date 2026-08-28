import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "author id is required"]
    },
    title: {
        type: String,
        required: [true, "song title is required"],
        trim: true,
        maxlength: [150, "title cannot exceed 150 characters"]
    },
    musicURL: {
        type: String,
        required: [true, "music file URL is required"],
        trim: true,
        match: [/^https:\/\/\S+$/, 'music URL must be a valid secure HTTPS link']
    },
    cloudinaryId: {
        type: String,
        required: [true, "cloudinary asset public id is required"]
    },
    duration: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const musicModel = mongoose.model("musics", musicSchema);

export default musicModel;

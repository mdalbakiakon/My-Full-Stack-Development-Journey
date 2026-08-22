import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        trim: true,
        maxlength: 2000
    },
    img: {
        type: String,
    },
    react: {
        type: Number,
        default: 0
    },
    comments: [
        {
            comment_author: String,
            comment_text: String,
            commented_at: {
                type: Date,
                default: Date.now
            }
        }
    ],
    create_at: {
        type: Date,
        default: Date.now
    }
});


const postModel = mongoose.model('posts', postSchema);

export default postModel;
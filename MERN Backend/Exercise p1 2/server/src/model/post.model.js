import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    author: String,
    caption: String,
    image: String
})

const postModel = mongoose.model("media_posts", postSchema);

export default postModel;
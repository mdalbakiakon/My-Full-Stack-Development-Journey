import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    caption: String,
    imgURL: String
})

const postModel = mongoose.model("posts", postSchema);

export default postModel;
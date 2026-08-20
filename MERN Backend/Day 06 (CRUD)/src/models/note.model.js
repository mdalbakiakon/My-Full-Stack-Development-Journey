import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    detail: String
})

const noteModel = mongoose.model("note_collection", noteSchema);

export default noteModel;
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const petSchema = new Schema({
    id: ObjectId,
    petName: String,
    ownerName: String,
    age: Number,
    type: String,
});

export const pet = mongoose.model('pets', petSchema);
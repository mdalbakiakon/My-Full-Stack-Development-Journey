//| Models are defined through the Schema interface.

import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogSchema = new Schema({
  id: ObjectId,
  author : String,
  title: String,
  isPublished: Boolean,
});

export const Blog = mongoose.model('Blog', BlogSchema);
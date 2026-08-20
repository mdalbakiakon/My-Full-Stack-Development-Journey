import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
    course_name: String,
    course_detail: String
});

const coursesModel = mongoose.model('courses', coursesSchema);

export default coursesModel;


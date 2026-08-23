import mongoose from "mongoose";

const empSchema = new mongoose.Schema({
    empName: String,
    empAge: Number,
    empImage: String
});

const empModel = mongoose.model("employees", empSchema);

export default empModel;
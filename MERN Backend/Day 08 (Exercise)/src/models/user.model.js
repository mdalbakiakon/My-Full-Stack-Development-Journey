import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const userModel = mongoose.model("exercise_users", userSchema);

export default userModel;
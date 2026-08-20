import mongoose from "mongoose";

// schema is the ruleset for the table/collection
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// model creates the table/collection name
const userModel = mongoose.model("users", userSchema);

export default userModel;
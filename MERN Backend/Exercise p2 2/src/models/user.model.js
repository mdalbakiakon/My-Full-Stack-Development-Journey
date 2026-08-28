import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        maxLength: [256, 'invalid email address'],
        match: [/^\S+@\S+\.\S+$/,'invalid email address']
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'password must be at least 8 characters long'],
        select: false
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        sparse: true,
        match: [/^[a-z0-9_.]{5,15}$/, 'username must be between 5 to 15 characters. lowercase alphabets, numbers, underscore and dot are allowed only']
    },
    role: {
        type: String,
        enum: ['artist', 'listener'],
        default: 'listener'
    }
}, {timestamps: true});


userSchema.pre("save", async function () {
    if(!this.isModified("password")){
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const userModel = mongoose.model("users", userSchema);

export default userModel;
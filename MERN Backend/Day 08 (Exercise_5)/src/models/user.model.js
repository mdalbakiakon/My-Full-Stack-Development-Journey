import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
        maxLength: [254, "email address is too long"],
        match: [/^\S+@\S+\.\S+$/, "please enter a valid email"]
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
        match: [/^[a-z0-9_.]{5,15}$/, "username must be 5-15 characters (lowercase letters, numbers, underscore or dot only)"]
    },
    password: {
        type: String,
        required: true,
        select: false,
        minLength: [8, "password must be at least 8 characters long"],
        maxLength: [20, "password must be under 20 characters"]
    }
}, { timestamps: true });


userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.methods.comparePassword = async function (typedPassword) {
    return await bcrypt.compare(typedPassword, this.password);
}

const userModel = mongoose.model("collection_users", userSchema);

export default userModel;
import mongoose from "mongoose";
import bcrypt from "bcrypt";

// user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        maxLength: [256, 'invalid email address'],
        match: [/^\S+@\S+\.\S+$/, 'invalid email address']
    },
    username: {
        type: String,
        unique: true,
        sparse: true,
        trim: true,
        lowercase: true,
        match: [/^[a-z0-9_.]{5,15}$/, 'username must be between 5-15 characters (only lowercase alphabet, number, underscore and dot allowed)']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minLength: [8, 'password must be at least 8 characters long'],
        maxLength: [20, 'password must be under 20 characters']
    },
    role: {
        type: String,
        enum: ["artist", "listener"],
        default: "listener"
    }
}, {timestamps: true});

// hashing password before save to database automatically
userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

// custom object own method to validate user given password at time of login
userSchema.methods.comparePassword = async function (typedPassword) {
    return await bcrypt.compare(typedPassword, this.password);
}


const userModel = mongoose.model("exercise_users", userSchema);

export default userModel;
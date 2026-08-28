import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: true,
        maxLength: [256, 'email is too long'],
        match: [/^\S+@\S+\.\S+$/, 'email is invalid']
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        sparse: true,
        match: [/^[a-z0-9_.]{5,15}$/, 'username must be between 5-15 characters (only lowercase, number, underscore and dot allowed)']
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'password must be at least 8 chracters long'],
        select: false
    },
    role: {
        type: String,
        enum: ["listener", "artist"],
        default: "listener"
    }
}, { timestamps: true });


userSchema.pre("save", async function () {
    if(!this.isModified("password")){
        return;
    }
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


userSchema.methods.comparePassword = async function (typedPassword) {
    return await bcrypt.compare(typedPassword, this.password);
}


const userModel = mongoose.model("users", userSchema);


export default userModel;
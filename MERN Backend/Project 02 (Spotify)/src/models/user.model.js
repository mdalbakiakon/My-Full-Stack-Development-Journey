import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            match: [
                /^[a-z0-9_.]{5,12}$/,
                "username must be between 5 to 12 characters (lowercase letters, numbers, underscore, dot only)",
            ],
        },
        email: {
            type: String,
            trim: true,
            required: true,
            lowercase: true,
            unique: true,
            maxLength: [256, "email is invalid due to large address"],
            match: [/^\S+@\S+\.\S+$/, "please enter a valid email"],
        },
        password: {
            type: String,
            required: true,
            minLength: [8, "password must be at least 8 characters long"],
            maxLength: [20, "password must be under 20 characters"],
            select: false,
        },
        role: {
            type: String,
            enum: ["artist", "listener"],
            default: "listener",
        },
    },
    { timestamps: true },
);


userSchema.pre("save", async function () {
    if(!this.isModified("password")){
        return;
    }
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


userSchema.methods.comparePassword = async function (typedPassword) {
    return await bcrypt.compare(typedPassword, this.password)
};


const userModel = mongoose.model('spotify_users', userSchema);

export default userModel;
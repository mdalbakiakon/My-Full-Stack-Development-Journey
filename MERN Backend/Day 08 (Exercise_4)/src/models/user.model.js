import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    // auth/register
    username: {
        type: String,
        trim: true,
        unique: true,
        minLength: [5, "Username must be at least 5 characters long"],
        required: true,
        lowercase: true,
        match: [/^[a-z0-9_.]+$/, "Username can only be consisted of lowercase letters, numbers, underscore and dot"]
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        minLength: [8, "Password must be at least 8 characters long"],
        required: true,
        select: false
    }
}, {timestamps: true});


userSchema.pre("save", async function () {
    if(!this.isModified("password")){
        return;
    }
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


userSchema.methods.comparePassword = async function(typedPassword){
    return await bcrypt.compare(typedPassword, this.password);
}

const userModel = mongoose.model('media_users', userSchema);

export default userModel;
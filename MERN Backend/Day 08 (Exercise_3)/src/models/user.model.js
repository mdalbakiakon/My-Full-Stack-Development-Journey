import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    // register/auth
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        minLength: [5, 'Username must be at least 5 characters long'],
        maxLength: [20, 'Username must be under 20 characters'],
        match: [/^[a-z0-9_.]+$/, "Username can only contain letters, numbers, underscore and dot"]
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password must be at least 8 characters long'],
        select: false
    },

    // profile
    firstName: {
        type: String,
        default: "",
        maxLength: [30, 'First name must be under 30 characters'],
        trim: true
    },
    lastName: {
        type: String,
        default: "",
        maxLength: [30, 'Last name must be under 30 characters'],
        trim: true
    },
    gender: {
        type: String,
        enum: ["male", "female", ""],
        default: ""
    },
    avatar: {
        type: String,
        default: ""
    },
    banner: {
        type: String,
        default: ""
    }
}, { timestamps: true });


userSchema.pre("save", async function(){
    if(!this.isModified("password")){
        return;
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


userSchema.methods.comparePassword = async function (typedPassword) {
    return await bcrypt.compare(typedPassword, this.password);
}

const userModel = mongoose.model('users', userSchema);

export default userModel;
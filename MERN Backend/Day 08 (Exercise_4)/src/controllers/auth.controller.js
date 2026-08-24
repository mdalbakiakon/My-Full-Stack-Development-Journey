import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken"

const registerUser = async (req, res) => {
    try {

        const data = req.body;
        const newUser = await userModel.create({
            ...data
        })

        const token = jwt.sign({
            id: newUser._id
        }, process.env.JWT_SECRET);

        res.cookie("MEDIA_TOKEN", token);

        const safeUser = newUser.toObject();
        delete safeUser.password;

        return res.status(201).json({
            message: 'user created successfully',
            safeUser,
            token
        })
        
    } catch (error) {
        console.log(error);

        if (error.name === "ValidationError") {

            const found_errors = {}

            Object.values(error.errors).forEach((err)=>{
                found_errors[err.path] = err.message;
            })

            return res.status(400).json({
                message: "validation error occured",
                found_errors
            })
        }

        if (error.code === 11000) {
            return res.status(409).json({
                message: "username or email is already registered"
            })
        }

        return res.status(500).json({
            message: "something went wrong"
        })
    }
}

export default { registerUser };

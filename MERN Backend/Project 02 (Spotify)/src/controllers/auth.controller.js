import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const signupUser = async (req, res) => {
    try {

        const { email, username, password } = req.body;
        const newUser = await userModel.create({
            email, password, username
        });

        const token = jwt.sign({
            id: newUser._id
        }, process.env.JWT_SECRET);

        res.cookie("SPOTIFY_TOKEN", token);

        const createdUser = newUser.toObject();
        delete createdUser.password;

        return res.status(201).json({
            message: 'user created successfully',
            createdUser,
            token
        })


    } catch (error) {
        console.log(error);

        if (error.name === "ValidationError") {
            const found_error = {};
            Object.values(error.errors).forEach((err) => {
                found_error[err.path] = err.message;
            })

            return res.status(400).json({
                message: 'empty / invalid / wrong credentials',
                found_error
            })
        }

        if (error.code === 11000) {
            return res.status(409).json({
                message: 'user is already registered'
            })
        }

        return res.status(500).json({
            message: 'something went wrong'
        })
    }
};


export default { signupUser };

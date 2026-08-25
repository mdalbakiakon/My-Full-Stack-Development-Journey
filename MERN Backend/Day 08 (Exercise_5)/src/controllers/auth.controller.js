import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    try {

        const data = req.body;
        const newUser = await userModel.create({
            ...data
        })

        const token = jwt.sign({
            id: newUser._id
        }, process.env.JWT_SECRET)

        res.cookie("TEST_TOKEN", token);
        console.log(token);

        const safeUser = newUser.toObject();
        delete safeUser.password;


        return res.status(201).json({
            message: 'new user created successfully',
            safeUser,
            token
        })

    } catch (error) {
        console.log(error);

        if (error.code === 11000) {
            return res.status(409).json({
                message: 'user already registered'
            })
        }

        if (error.name === "ValidationError") {
            const found_error = {};
            Object.values(error.errors).forEach((err) => {
                found_error[err.path] = err.message;
            })
            return res.status(400).json({
                message: 'validation error occured',
                found_error
            })
        }

        return res.status(500).json({
            message: 'something went wrong'
        })
    }
};


const loginUser = async (req, res) => {
    try {

        const { identifier, password } = req.body;
        const token = req.cookies.TEST_TOKEN;

        console.log(identifier, password);
        console.log(token);

        if (!token) {
            return res.status(401).json({
                message: 'unauthorized user'
            })
        }

        const isValidUser = jwt.verify(token, process.env.JWT_SECRET);

    } catch (error) {
        console.log(error);

        if(error.name === "JsonWebTokenError"){
            return res.status(401).json({
                message: 'invalid token'
            })
        }

        return res.status(500).json({
            message: 'something went wrong'
        })
    }
}

export default { registerUser, loginUser };
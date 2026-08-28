import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const signupUser = async (req, res) => {
    try {
        const email = req.email;
        const password = req.password;

        const newUser = await userModel.create({
            email: email,
            password: password
        })

        const token = jwt.sign({
            id: newUser._id,
            role: newUser.role
        }, process.env.JWT_SECRET);

        res.cookie('NEW_PRACTISE_TOKEN', token);

        const showUser = newUser.toObject();
        delete showUser.password;

        return res.status(201).json({
            status: 'success',
            message: 'new user registered',
            newUser: showUser,
            token: token
        })

    } catch (err) {
        console.log(err.message);

        if (err.name === "ValidationError") {

            const foundErrors = {};

            Object.values(err.errors).forEach((error) => {
                foundErrors[error.path] = error.message;
            })

            return res.status(400).json({
                status: 'failed',
                message: 'invalid credentials',
                foundErrors
            })
        }


        if (err.code === 11000) {
            return res.status(409).json({
                status: 'failed',
                message: 'user is already registered'
            })
        }

        return res.status(500).json({
            status: 'failed',
            message: 'something went wrong in user signup',
            err: err.message
        });
    }
}

export default { signupUser };
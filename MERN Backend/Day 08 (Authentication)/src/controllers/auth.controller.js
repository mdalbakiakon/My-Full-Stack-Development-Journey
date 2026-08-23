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

        res.status(201).json({
            message: 'successfully created new user',
            newUser: newUser,
            token: token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'something went wrong while registering new user'
        })
    }
}

export default { registerUser };
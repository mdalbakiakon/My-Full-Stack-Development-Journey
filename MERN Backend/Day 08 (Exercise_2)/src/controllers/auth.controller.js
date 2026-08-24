import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    try {
        const data = req.body;
        const isUsernameExist = await userModel.findOne({
            username: data.username
        })

        const isEmailExist = await userModel.findOne({
            email: data.email
        })

        if (isUsernameExist || isEmailExist) {
            console.log('username or email is already register');
            return res.status(409).json({
                message: 'username or email is already registered'
            })
        }


        const newUser = await userModel.create({
            ...data
        })

        const token = jwt.sign({
            id: newUser._id
        }, process.env.JWT_SECRET);

        res.cookie("token", token);

        return res.status(201).json({
            message: 'user created successfully',
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'something went wrong'
        })
    }
}

export default { registerUser };


import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";


// signup auth
const signupUser = async (req, res) => {
    try {

        const { email, username, password, role='listener'} = req.body;
        const newUser = await userModel.create({
            email, password, username, role
        });

        const token = jwt.sign({
            id: newUser._id,
            role: newUser.role
        }, process.env.JWT_SECRET);

        res.cookie("SPOTIFY_TOKEN", token);

        const createdUser = newUser.toObject();
        delete createdUser.password;

        return res.status(201).json({
            message: 'user created successfully',
            user: createdUser,
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



// login auth
const loginUser = async (req, res) => {
    try {
        
        const {identifier, password} = req.body;
        const foundUser = await userModel.findOne({
            $or: [{email: identifier}, {username: identifier}]
        }).select("+password");


        if(!foundUser){
            return res.status(401).json({
                // we will not pass that email or username is not registered here for security purpose
                message: 'invalid credientials'
            })
        };

        const isPasswordValid = await foundUser.comparePassword(password);

        if(!isPasswordValid){
            return res.status(401).json({
                // we will not pass password is wrong for the security purpose
                message: 'invalid credentials'
            })
        }

        const loginToken = jwt.sign({
            id: foundUser._id,
            role: foundUser.role
        }, process.env.JWT_SECRET);

        res.cookie('SPOTIFY_TOKEN', loginToken);

        const safeUser = foundUser.toObject();
        delete safeUser.password;

        return res.status(200).json({
            message: 'login successful -- welcome user',
            user: safeUser
        })


    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: 'something went wrong'
        })
    }
}



export default { signupUser, loginUser };

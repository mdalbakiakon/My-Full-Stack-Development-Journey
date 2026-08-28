import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const signupUser = async (req, res) => {
    try {
        const isProduction = process.env.NODE_ENV === "production";

        const newUser = await userModel.create({
            email: req.email,
            password: req.password
        })

        const token = jwt.sign({
            id: newUser._id,
            role: newUser.role
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie("NEW2_TOKEN", token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: 'strict'
        });

        const showUser = newUser.toObject();
        delete showUser.password;

        return res.status(201).json({
            status: 'success',
            message: 'user created successfully',
            newUser: showUser
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
                error: foundErrors
            })
        }

        if (err.code === 11000) {
            return res.status(409).json({
                status: 'failed',
                message: 'user already registered',
                error: err.message
            })
        }

        return res.status(500).json({
            status: 'failed',
            message: 'something went wrong while registering user',
            error: err.message
        })
    }
};




const loginUser = async (req, res) => {
    try {

        const isProduction = process.env.NODE_ENV === "production";

        const query = req.identifierType === 'email'
            ? { email: req.email }
            : { username: req.username }

        const foundUser = await userModel.findOne(query).select("+password");

        if (!foundUser) {
            return res.status(401).json({
                status: 'failed',
                message: 'unauthorized user'
            })
        }

        const isPasswordValid = await foundUser.comparePassword(req.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                status: 'failed',
                message: 'unauthorized user'
            })
        }

        const token = jwt.sign({
            id: foundUser._id,
            role: foundUser.role
        },
            process.env.JWT_SECRET,
            { expiresIn: '1d' });

        res.cookie("NEW2_TOKEN", token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: 'strict'
        });

        return res.status(200).json({
            status: 'success',
            message: 'user logged in'
        })


    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            status: 'failed',
            message: 'something went wrong while login user',
            error: err.message
        })
    }
};


export default { signupUser, loginUser };
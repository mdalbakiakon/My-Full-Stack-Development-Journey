import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

// POST /api/auth/signup -- register new user
const signupUser = async (req, res) => {
    try {

        // destructering user input
        const { email, password } = req.body;
        const newUser = await userModel.create({
            email,
            password
        });

        // creating a valid token for newly created user
        const token = jwt.sign({
            id: newUser._id,
            role: newUser.role
        }, process.env.JWT_SECRET);

        // saving the token in cookie at client end
        res.cookie('EXERCISE_TOKEN', token)

        // making a safe user show object to restrict the hashed password show in response message
        const showUser = newUser.toObject();
        delete showUser.password;

        // showing response for a successfully created new user
        return res.status(201).json({
            message: 'user created successfully',
            showUser,
            token
        })


    } catch (error) {
        // any encounter error just show the message in console
        console.log(error.message);

        // error handle for any invalid credentials used in signup
        if (error.name === "ValidationError") {
            
            // making a object of errors that contains all validation errors together to show in the response
            const foundError = {};
            Object.values(error.errors).forEach((err) => {
                foundError[err.path] = err.message
            })

            return res.status(400).json({
                message: 'enter valid credentials',
                foundError
            })
        }

        // error handle for conflict or already existing email
        if (error.code === 11000) {
            return res.status(409).json({
                message: 'email already registered'
            })
        }

        // fallback error message handle
        return res.status(500).json({
            message: 'somthing went wrong',
            error: error.message
        })
    }
}

export default {signupUser};
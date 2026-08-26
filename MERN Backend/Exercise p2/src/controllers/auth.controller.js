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


// POST /api/auth/login -- login user
const loginUser = async (req, res) => {
    try {
        // getting user input
        let { identifier, password } = req.body;

        // as db schema set to trim the identifiers so we are triming to increase if user gives a valid value with extra space      
        identifier = identifier.trim();

        // if user dont give any credentials
        if (!identifier || !password) {
            return res.status(400).json({
                message: 'identifier and password are required'
            });
        }

        // finding user from database
        const foundUser = await userModel.findOne({
            $or: [{ email: identifier }, { username: identifier }]
        })

        // if user not found from database
        if (!foundUser) {
            return res.status(401).json({
                message: 'unauthorized user'
            })
        }

        // comparing password from hashed password
        const isPasswordValid = await foundUser.comparePassword(password);

        // if user did not give valid password
        if (!isPasswordValid) {
            return res.status(401).json({
                message: 'unauthorized user'
            })
        }

        // setting up login token
        const token = jwt.sign({
            id: foundUser._id,
            role: foundUser.role
        }, process.env.JWT_SECRET);

        // saving token in cookies
        res.cookie("EXERCISE_TOKEN", token);

        // showUser
        const showUser = foundUser.toObject();
        delete showUser.password;

        // successful login
        return res.status(200).json({
            message: 'login successful',
            user: showUser
        })

    } catch (error) {
        console.log(error.message);

        // fallback error handling
        return res.status(500).json({
            message: 'something went wrong',
            error: error.message
        })
    }
}


export default { signupUser, loginUser };
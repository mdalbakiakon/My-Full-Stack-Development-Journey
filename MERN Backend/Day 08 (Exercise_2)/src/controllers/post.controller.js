import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const createPost = async (req, res) => {
    try {
        const data = req.body;

        console.log(data);

        const token = req.cookies.token;

        console.log(token);

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        console.log(decode);

        return res.status(201).json({
            message: "Post created successfully",
            userId: decode.id
        });

    } catch (error) {
        console.log(error);

        return res.status(401).json({
            message: "Invalid or missing token"
        });
    }
};

export default { createPost };

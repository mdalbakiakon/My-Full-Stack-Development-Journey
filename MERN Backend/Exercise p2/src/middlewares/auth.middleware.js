import jwt from "jsonwebtoken";

const authArtist = async (req, res, next) => {
    try {
        // fetch token
        const token = req.cookies.EXERCISE_TOKEN;

        // if token not found
        if (!token) {
            res.status(401).json({
                message: "unauthorized user"
            })
        }

        // if token is there verify it
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // check for role
        if(decoded.role !== "artist"){
            return res.status(403).json({
                message: "no permission to create"
            })
        }

        // if artist role found
        req.user = decoded;
        next();

    } catch (error) {
        console.log(error.message);

        // if token is malformed
        if(error.name === "JsonWebTokenError"){
            return res.status(401).json({
                message: "unauthorized user"
            })
        }

        // fallback error
        return res.status(500).json({
            message: "something went wrong",
            error: error.message
        })
    }
}

export default { authArtist };
import jwt from "jsonwebtoken"; 

const isUserArtist = async (req, res, next) => {
    try {

        const token = req.cookies.NEW2_TOKEN;

        if (!token) {
            return res.status(401).json({
                status: 'failed',
                message: 'unauthorized user due to no token found'
            });
        }


        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        if (decoded.role !== "artist") {
            return res.status(403).json({
                status: 'failed',
                message: 'user is not an artist'
            });
        }

        req.artistId = decoded.id;
        
        next();

    } catch (err) {
        console.log("Middleware Error:", err.message);

        if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
            return res.status(401).json({
                status: 'failed',
                message: 'unauthorized user or session expired',
                error: err.message
            });
        }

        return res.status(500).json({
            status: 'failed',
            message: 'something went wrong from isUserArtist middleware',
            error: err.message
        });
    }
};

export default { isUserArtist };

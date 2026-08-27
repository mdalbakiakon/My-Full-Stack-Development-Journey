import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const cloudUpload = async (buffer, mimetype) => {

    try {
        // Buffer to Base64
        const base64 = buffer.toString("base64");

        // Base64 to Data URI
        const dataUri = `data:${mimetype};base64,${base64}`;

        // Upload and convert to Opus
        const result = await cloudinary.uploader.upload(dataUri, {
            folder: "exercise_spotify",
            resource_type: "auto"
        });

        return result;

    } catch (error) {
        console.error("Cloudinary upload error:", error.message);
    }
};

export default cloudUpload;
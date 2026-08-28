import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const cloudUpload = async (buffer, mimetype) => {
    try {
        const base64 = buffer.toString('base64');
        const clean64 = `data:${mimetype};base64,${base64}`;

        const result = await cloudinary.uploader.upload(clean64, {
            resource_type: "auto",
            folder: "new_exercise"
        });

        return result.secure_url;

    } catch (err) {
        console.log(err.message);
    }
}

export default cloudUpload;

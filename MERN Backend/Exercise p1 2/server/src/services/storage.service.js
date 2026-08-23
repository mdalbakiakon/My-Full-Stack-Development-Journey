import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloud = async (imgBuffer, mimetype) => {
    const base64 = imgBuffer.toString("base64");
    const dataURI = `data:${mimetype};base64,${base64}`;

    const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
        folder: "exercise_2",
        format: "webp",
        quality: "auto",
    });

    return cloudinaryResponse;
};

export default uploadToCloud;

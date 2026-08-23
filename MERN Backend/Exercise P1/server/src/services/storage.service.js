import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";

dotenv.config();

const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
const api_key = process.env.CLOUDINARY_API_KEY;
const api_secret = process.env.CLOUDINARY_API_SECRET;

cloudinary.config({
    cloud_name: cloud_name,
    api_key: api_key,
    api_secret: api_secret
});

const uploadToCloud = async (buffer, mimetype) => {
    const base64 = buffer.toString('base64');
    const dataURI = `data:${mimetype};base64,${base64}`;

    const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
        folder: 'emp-images',
        format: 'webp',      
        quality: 'auto'
    });

    return cloudinaryResponse.secure_url;
}

export default uploadToCloud;
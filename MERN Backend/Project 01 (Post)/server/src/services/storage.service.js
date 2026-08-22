import ImageKit from '@imagekit/nodejs';
import dotenv from "dotenv";

dotenv.config();


const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});


const uploadFile = async (buffer) => {
    const response = await client.files.upload({
        file: buffer.toString('base64'),
        fileName: 'file-name.jpg',
    });

    return response;
}

export default uploadFile;
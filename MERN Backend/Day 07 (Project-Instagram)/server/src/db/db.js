import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(`${uri}instaPost`);
        console.log('database connected successfully');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;
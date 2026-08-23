import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(`${uri}sample_db`);
        console.log('connected to database');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;
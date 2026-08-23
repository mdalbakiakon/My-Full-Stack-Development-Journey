import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(`${uri}sample_db_exercise`);
        console.log('connected to database');
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

export default connectDB;
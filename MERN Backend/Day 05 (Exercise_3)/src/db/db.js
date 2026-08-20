import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(`${uri}testDB2`);
        console.log('connected to database');
    } catch (error) {
        console.log(`error in connecting database: ${error}`)
    }
}

export default connectDB;
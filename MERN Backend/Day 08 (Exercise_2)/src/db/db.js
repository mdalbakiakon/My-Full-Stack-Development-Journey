import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(`${uri}secondaryDB`);
        console.log('connected to database');
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export default connectDB;
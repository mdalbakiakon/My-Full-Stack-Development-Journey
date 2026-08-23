import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    await mongoose.connect(`${uri}employeeDB`);
    console.log('connected to database');
}

export default connectDB;
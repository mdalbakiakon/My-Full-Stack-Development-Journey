import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    await mongoose.connect(`${uri}postDB`);
    console.log('successfully connected to database');
};

export default connectDB;
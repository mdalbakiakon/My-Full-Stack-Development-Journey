import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(`${uri}crudDB`);
        console.log('connected to database successfully');
    }
    catch (error) {
        console.log(`error occured in connecting database\n${error}`);
    }
}

export default connectDB;
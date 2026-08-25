import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_DB);
    console.log('successfully connected to database');
}

export default connectDB;
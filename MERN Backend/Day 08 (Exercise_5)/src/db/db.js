import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_DATABASE);
        console.log('successfully connected to database');
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default connectDB;
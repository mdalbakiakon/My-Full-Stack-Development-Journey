import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns';

dotenv.config();

dns.setServers(['8.8.8.8', '8.8.4.4']);

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(`${URI}`);
        console.log('connected to database');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

export default connectDB;
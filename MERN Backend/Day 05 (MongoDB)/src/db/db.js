import dotenv from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb'

dotenv.config()
const uri = process.env.MONGODB_URI

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const connectDB = async () => {
    try {
        await client.connect();
        console.log("successfully connected to MongoDB");
    } catch (error) {
        console.log(`error occured while connecting to MongoDB: ${error}`)
    }
}

export { client, connectDB };
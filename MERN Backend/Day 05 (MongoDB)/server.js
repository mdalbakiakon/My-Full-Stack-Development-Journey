import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDB } from "./src/db/db.js";

dotenv.config()
const PORT = process.env.PORT;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server is running on port: ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(`server failed to start: ${error}`);
    });
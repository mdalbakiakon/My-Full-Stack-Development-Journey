import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/db/db.js";
import app from "./src/app.js";

const PORT = process.env.PORT;

connectDB();


app.listen(PORT, () => {
    console.log(`server is live on port: ${PORT}`);
})
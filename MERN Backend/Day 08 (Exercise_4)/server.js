import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import app from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/db/db.js";

dotenv.config();

const PORT = process.env.PORT;

connectDB()
    .then(
        () => {
            app.listen(PORT, () => {
                console.log(`server is live on port: ${PORT}`);
            })
        }
    )
    .catch(
        (error) => console.log(error)
    )

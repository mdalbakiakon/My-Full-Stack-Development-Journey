// server.js file will just start server not create it

import app from "./src/app.js"
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is live on port: ${PORT}`)
})
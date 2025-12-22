import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import Users from "./models/Users.js";


mongoose.connect('mongodb://127.0.0.1:27017/company');

const app = express();

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/generate", async (req, res) => {

    await Users.deleteMany({});

    function randomIndex() {
        return Math.floor(Math.random() * 5)   
    }

    let randomName = ["John", "Bravo", "Johnny", "Siam", "Mishkath"]
    let randomAddress = ["Karachi", "Chittagong", "Dhaka", "Doha", "Abu Dhabi"]
    
    for (let index = 0; index < 10; index++) {
        const user = new Users({
            name: randomName[randomIndex()],
            address: randomAddress[randomIndex()],
            order_qt: Math.floor(Math.random() * 101)
        });
        
        await user.save();
    }

    res.render("index");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

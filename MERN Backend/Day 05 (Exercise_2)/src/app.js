import express from "express";
import userModel from "./models/user.model.js";

const app = express();

// middleware
app.use(express.json());

// api endpoints
app.get("/", (req, res) => {
    res.send("learning mongodb");
});

// create user...POST /users
app.post('/users', async (req, res) => {
    const data = req.body;
    await userModel.create({
        name: data.name,
        age: data.age
    });

    res.status(201).json({
        message: 'user created'
    })
})

// get users...GET /users
app.get('/users', async (req, res) => {
    const users = await userModel.find();

    res.status(200).json({
        message: "users fetched successfully",
        users: users
    })
})

export default app;

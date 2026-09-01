import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["1.1.1.1", "1.0.0.1"]);

dotenv.config();

const app = express();

const PORT = 3000;

async function connectDB() {
    await mongoose.connect(process.env.DATABASE);
    console.log('connected to database');
}

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log('server is live');
        })
    })
    .catch((err) => console.log(err));


const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: String
});

const userModel = mongoose.model("test_users", userSchema);


async function operateDB() {

    //| creating data
    // await userModel.create({
    //     name: "baki",
    //     age: 25,
    //     address: "dhaka"
    // })

    //| insertOne
    //     await userModel.insertOne({
    //         name: "mishkath",
    //         age: 22,
    //         address: "karachi"
    //     })
    // 

    // | insert many
    // await userModel.insertMany([
    //     {
    //         name: "hadi",
    //         age: 20,
    //         address: "dhaka"
    //     },
    //     {
    //         name: "nimra",
    //         age: 21,
    //         address: "karachi"
    //     },
    //     {
    //         name: "monira",
    //         age: 50,
    //         address: "dhaka"
    //     }
    // ])

    // | count documents
    // const countDhaka = await userModel.countDocuments({
    //     address: "dhaka"
    // });

    // console.log(countDhaka);


    // | distinct
    // give a array which will contain all unique value of the given field 
    // const addressDistinct = await userModel.distinct("name")

    // console.log(addressDistinct);


    // | find
    // const foundArray = await userModel.find().select("address age");
    // console.log(foundArray);
    

    // 
    // const foundArray = await userModel.find().select("address age");
    // console.log(foundArray);
    
}






operateDB();

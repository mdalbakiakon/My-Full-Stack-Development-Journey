import mongoose from "mongoose";
import express from "express";
import { Blog } from "./models/Blog.js";

let conn = await mongoose.connect('mongodb://localhost:27017/BlogDB')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const blog = new Blog({
        author: "Mishkath",
        title: "Future of PharmD",
        // isPublished: "hello world" this will give error as it is not boolean
        isPublished: true
    })
    blog.save()
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

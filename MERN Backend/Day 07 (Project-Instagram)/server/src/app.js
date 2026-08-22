import express from "express";
import postModel from "./models/post.model.js";
import cors from "cors";

const app = express();

// middleware
app.use(express.json());
app.use(cors());


// api endpoints
// POST /post -- create post
app.post('/post', async (req, res) => {
    const data = req.body;
    await postModel.create({
        author: data.author,
        caption: data.caption,
        img: data.img
    });

    res.status(201).json({
        message: 'post created successfully'
    })
})


// GET /post -- read post
app.get('/post', async (req, res) => {
    const postList = await postModel.find();
    res.status(200).json({
        message: 'all post fetched successfully',
        postList: postList
    })
})


// PATCH /post/:id -- update post
app.patch('/post/:id', async (req, res) => {
    const postId = req.params.id;
    const data = req.body;

    await postModel.findOneAndUpdate({
        _id: postId
    }, {
        $set: data
        //$set only works in patch not in other method 
    });

    res.status(200).json({
        message: 'post updated successfully'
    })
})


// DELETE /post/:id -- delete post
app.delete('/post/:id', async (req, res) => {
    const postId = req.params.id;
    await postModel.findOneAndDelete({
        _id: postId
    });

    res.status(200).json({
        message: 'post deleted successfully'
    })
})

export default app;
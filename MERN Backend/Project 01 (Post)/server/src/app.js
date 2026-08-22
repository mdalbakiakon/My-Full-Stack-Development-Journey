import express from "express";
import cors from "cors";
import postModel from "./models/post.model.js";
import multer from "multer";
import uploadFile from "./services/storage.service.js";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() })

// api endpoints
// GET /feed -- read all posts
app.get("/feed", async (req, res) => {
    const postsFeed = await postModel.find();
    res.status(200).json({
        message: "all post data fetched successfully",
        feed: postsFeed
    });
});

// POST /create-post -- create post
app.post("/create-post", upload.single("image"), async (req, res) => {

    const caption = req.body.caption;
    const buffer = req.file.buffer;

    const data = await uploadFile(buffer);
    
    const post = await postModel.create({
        caption: caption,
        imgURL: data.url,
    });

    res.status(201).json({
        message: "post created successfully",
        post: post
    });

});

export default app;

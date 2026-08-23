import express from "express";
import cors from "cors";
import multer from "multer";
import postModel from "./model/post.model.js";
import uploadToCloud from "./services/storage.service.js";

const app = express();
app.use(express.json());
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage });

// GET /post -- read all post
app.get("/post", async (req, res) => {
  try {
    const postList = await postModel.find();
    res.status(200).json({
      message: "all post fetched successfully",
      postList: postList,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
});

// POST /create-post -- create post
app.post("/create-post", upload.single("postImg"), async (req, res) => {
  try {
    const data = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No image file provided" });
    }

    const cloudinaryResponse = await uploadToCloud(file.buffer, file.mimetype);

    const secure_url = cloudinaryResponse.secure_url;

    const newPost = await postModel.create({
      ...data,
      image: secure_url,
    });

    res.status(201).json({
      message: "successfully post created",
      newPost: newPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
});

export default app;

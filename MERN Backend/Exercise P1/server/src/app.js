import express from "express";
import cors from "cors";
import multer from "multer";
import empModel from "./models/emp.model.js";
import uploadToCloud from "./services/storage.service.js";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage });


// api endpoints
// GET /emp -- read all employee data
app.get('/emp', async (req, res) => {
    const empList = await empModel.find();
    res.status(200).json({
        message: 'fetched all employee info',
        empList: empList
    })
})

// POST /create-emp -- create new employee
app.post('/create-emp', upload.single('empImage'), async (req, res) => {
    try {
        const data = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ message: 'No image file provided' });
        }

        const imgURL = await uploadToCloud(file.buffer, file.mimetype);

        const newEmp = await empModel.create({
            ...data,
            empImage: imgURL,
        });

        res.status(201).json({
            message: 'employee created',
            empInfo: newEmp,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something went wrong' });
    }
})

export default app;
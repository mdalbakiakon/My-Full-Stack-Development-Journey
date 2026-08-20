import express from 'express';
import coursesModel from './models/courses.model.js';

const app = express();

// middleware
app.use(express.json());


// api endpoints
// POST /courses -- create new course
app.post('/courses', async (req, res) => {
    const course = req.body;
    await coursesModel.create({
        course_name: course.course_name,
        course_detail: course.course_detail
    });

    res.status(201).json({
        message: 'new course created'
    })
});


// GET /courses -- get all courses
app.get('/courses', async (req, res) => {
    const courses = await coursesModel.find();
    res.status(200).json({
        message: 'all courses fetched successfully',
        courses: courses
    })
});

export default app;
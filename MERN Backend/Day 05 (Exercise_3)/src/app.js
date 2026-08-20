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

    const oneCourse = await coursesModel.findOne({
        course_name: 'React frontend'
    });

    res.status(200).json({
        message: 'all courses fetched successfully',
        courses: courses,
        oneCourse: oneCourse
    })

    // find() => [{}, {}, ...] or []
    // findOne() => {} or null

});


// DELETE /courses/:id -- delete course
app.delete('/courses/:id', async (req, res) => {
    const id = req.params.id;
    await coursesModel.findOneAndDelete({
        _id: id
    });

    res.status(200).json({
        message: 'course deleted successfully'
    });
});


// PATCH /notes/:id -- update course
app.patch('/courses/:id', async (req, res) => {
    const id = req.params.id;
    const course_name = req.body.course_name;

    await coursesModel.findOneAndUpdate({
        _id: id
    }, {
        course_name: course_name
    });

    res.status(200).json({
        message: 'course updated successfully'
    });
})

export default app;
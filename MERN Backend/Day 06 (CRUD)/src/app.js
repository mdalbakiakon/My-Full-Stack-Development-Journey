import express from 'express';
import noteModel from './models/note.model.js';

const app = express();

// middleware
app.use(express.json());


// POST /note -- create note
app.post('/note', async (req, res) => {
    const data = req.body;
    await noteModel.create({
        title: data.title,
        detail: data.detail
    });

    res.status(201).json({
        message: 'note created successfully'
    });
});


// GET /note -- read note
app.get('/note', async (req, res) => {
    const notes = await noteModel.find();

    res.status(200).json({
        message: 'notes fetched successfully',
        notes: notes
    })
});


// GET /note/:id -- read specific note
app.get('/note/:id', async (req, res) => {
    const id = req.params.id;
    const foundNote = await noteModel.findOne({
        _id: id
    })

    res.status(200).json({
        message: 'note found',
        note: foundNote
    })
});


// PATCH /note/:id -- update specific note
app.patch('/note/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    await noteModel.findOneAndUpdate({
        _id: id
    }, {
        title: data.title,
        detail: data.detail
    })

    res.status(200).json({
        message: 'note updated'
    })
});


// DELETE /note/:id -- delete specific note
app.delete('/note/:id', async (req, res) => {
    const id = req.params.id;
    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: 'note deleted successfully'
    })
})

export default app;
import express from "express";
import exercise_notes from "./assets/exerciseNotes.js";

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('exercise server');
})

// POST /notes
app.post('/notes', (req, res) => {
    exercise_notes.push(req.body);

    res.status(201).json({
        message: "exercise note is created!"
    })
})

// GET /notes
app.get('/notes', (req, res) => {

    res.status(200).json({
        message: "exercise notes are fetched successfully",
        notes: exercise_notes
    })
})

// DELETE /notes/:idx
app.delete('/notes/:idx', (req, res) => {
    let idx = req.params.idx;

    if (!/^\d+$/.test(idx) || idx < 0 || idx >= exercise_notes.length) {
        return res.status(404).json({
            message: 'note not found'
        })
    }

    idx = parseInt(idx, 10);
    exercise_notes.splice(idx, 1);
    res.status(200).json({
        message: 'note deleted successfully'
    })

})


// PATCH /notes/:index
app.patch('/notes/:idx', (req, res) => {
    let idx = req.params.idx;

    if (!/^\d+$/.test(idx) || idx < 0 || idx >= exercise_notes.length) {
        return res.status(404).json({
            message: 'note not found'
        })
    }

    idx = parseInt(idx, 10);
    exercise_notes[idx].details = req.body.details;

    res.status(200).json({
        message: 'note updated'
    });

})

export default app;
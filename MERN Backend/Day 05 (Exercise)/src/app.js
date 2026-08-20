import express from 'express'
import noteModel from './models/note.model.js'

const app = express()

// middleware
app.use(express.json())

// GET /notes
app.get('/notes', async (req, res) => {
    const notes = await noteModel.find() //find returns an array and it will fetch all records within the note Schema

    res.status(200).json({
        message: 'notes fetched successfully',
        notes: notes
    })
})

// POST /notes
app.post('/notes', async (req, res) => {
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: 'note created'
    })
})

export default app
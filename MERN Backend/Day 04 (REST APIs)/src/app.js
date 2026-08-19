// app.js file will have only one work to create the server

import express from 'express'
import notes from './assets/notes.js'

const app = express()

// middleware
// raw express cant read the data which comes with req.body by default therefor we need a middleware white is express.json()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello notewriter')
})

// POST /notes
app.post('/notes', (req, res) => {
    notes.push(req.body)

    // status code 201 means success with a resource created
    res.status(201).json({
        message: 'note created successfully'
    })
})


// GET /notes
app.get('/notes', (req, res) => {
    res.status(200).json({
        message: 'note fetched successfully',
        notes: notes
    })
})


// DELETE /notes
app.delete('/notes/:index', (req, res) => {

    const index = req.params.index;
    
    delete notes[index];
    // delete leaves a null in that particular index doesnt clear the index

    res.status(200).json({
        message: `note at index: ${index} deleted successfully`
    })

})

export default app
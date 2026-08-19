import express from 'express'

// instance of server is created in this line
const app = express()


// api endpoints
app.get('/', (req, res)=>{
    res.send('welcome Baki')
})


// .listen() method start the server
app.listen(5000, ()=>{
    console.log('server is live!')
})



// API - (Application Programming Interface)
// API is a set of rules or protocols that allow to communicate, exchange data and functionality between software programs
const express = require('express')
const app = express()
const port = 3000

// this is a built in middleware
app.use(express.static('public'))

//? lets build our custom middleware
// this is also calls global middleware -> a middle ware which did not defined through route it is a global middleware
//| middleware1
app.use((req, res, next)=>{
    console.log("middleware1")
    // res.send("Middleware 1 and it is done!") //!--> if we res in middleware we cant use next() it will give error 
    next() //if we dont give next the browser will be loading for infinite time 
})

//| middleware2
app.use((req, res, next)=>{
    console.log("middleware1")
    next()
})

app.get('/', (req, res) => {
  res.send('Oh hi!')
})

app.get('/about', (req, res)=>{
    res.send('About Page')
})

app.get('/contact', (req, res)=>{
    res.send('Contact Page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
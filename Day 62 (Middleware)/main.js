const express = require('express')
const birds = require('./routes/birds')
const app = express()
const port = 3000
const fs = require("fs")





// | Middleware can modify req

// this is a built in middleware
app.use(express.static('public'))

//? lets build our custom middleware
// this is also calls global middleware -> a middle ware which did not defined through route it is a global middleware
//| middleware1
app.use((req, res, next) => {
  console.log(req.headers)
  req.siam = 55
  console.log(req)
  console.log(req.siam)
  console.log("middleware1")
  console.log(new Date())
  console.log(new Date().toString())
  console.log(`${Date.now()} is a ${req.method} request to ${req.url}`) //-->Date.now is a timestamp best to use "new Date().toString()"
  fs.appendFileSync("public/log.txt", `${new Date().toString()} is a ${req.method} request to ${req.url}\n`)
  // res.send("Middleware 1 and it is done!") //!--> if we res in middleware we cant use next() it will give error 
  next() //if we dont give next the browser will be loading for infinite time 
})

//| middleware2
app.use((req, res, next) => {
  console.log("middleware2")
  req.siam = "I am Siam"
  // res.send("Middleware 2 and it is done!")
  next()
})



app.use('/birds', birds)

app.get('/', (req, res) => {
  res.send('Oh hi!')
})

app.get('/about', (req, res) => {
  res.send('About Page' + " " + req.siam)
  // in express concatenation of string by using comma is not valid
})

app.get('/contact', (req, res) => {
  res.send('Contact Page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
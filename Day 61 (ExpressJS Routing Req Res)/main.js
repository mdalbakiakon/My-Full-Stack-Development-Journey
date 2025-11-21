const express = require('express')
const app = express()
const port = 3000

// get request has limitation say 2083 character in the URL otherwise giving 414 error which is too long URL
// 2KB~8KB is the size of get request



app.get('/', (req, res) => {
  console.log('This is a get request') //console just print in the running terminal
  res.send('Hello World!') //res send the info to the direct html page or browser console
})


// chaining of request
app.get("/", (req, res)=>{
  res.send("Oh Hii!")
})

//! for get and / endpoint we have define two same route so first one wins it does not work like variable


app.use(express.static('public'))


// app.post('/', (req, res)=>{
//   console.log('This is a post request')
//   res.send('post request')
// })

//put request use for update!!!
app.put('/', (req, res)=>{
  console.log('This is a put request')
  res.send('put request')
})


app.delete('/', (req, res)=>{
  console.log('This is a delete request')
  res.send('delete request')
})




// chaining of request
app.get("/", (req, res)=>{
  res.send("Oh Hii!")
}).post("/", (req, res)=>{
  res.send("I am a post request")
})


// from templates folder
app.get("/index", (req, res)=>{
  console.log("It is from templates folder!")
  // res.send("Hello world Index")
  res.sendFile("templates/index.html", {root: __dirname}) //folder rendering html
})



app.get("/api", (req, res)=>{
  res.json({
    a:1,
    b:2,
    c:3, 
    "name": [
      "harry", "jerry"
    ] 
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app = express()
const port = 3000

// this will make the public folder a static folder so we can access it from the browser end
app.use(express.static('public'))

// app.get app.post app.put app.delete => (path, handler)
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/home', (req, res)=>{
    res.send("<h1>Welcome to Home</h1>")
})


app.get('/about', (req, res)=>{
  res.send("<h1>Hello about me</h1>")
})

app.get('/blog', (req, res)=>{
  res.send("<h1>Hello blog</h1>")
})



// app.get('/blog/intro-to-js', (req, res)=>{
//   // logic to fetch intro to js from the Database
//   res.send("<h1>Hello Intro to JS</h1>")
// })

// app.get('/blog/intro-to-python', (req, res)=>{
//   // logic to fetch intro to python from the Database
//   res.send("<h1>Hello Intro to Python</h1>")
// })



// this is why using express


//using : will make the variable
app.get('/blog/:slug', (req, res)=>{

  // /blog/:slugt --> this is called params or paramenter --> invoke through req.params.variable name
  //!  res.send(`<h1>Hello ${req.params.slug} and his brother is ${req.params.second}</h1>`)

  res.send(`<h2>Hello ${req.params.slug}</h2>`)
  // console.log(req)
  console.log(req.params)
  console.log(req.params.slug)

  // for url: http://localhost:3000/blog/intro-to-python?mode=dark&region=bd]

  // if we add ? and add something after the path it becomes the query
  console.log(req.query)
  console.log(req.query.mode)
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app = express()
const port = 3000

// public folder will allow the user to see the content
app.use(express.static('public'))

// app.get app.post app.put app.delete => (path, handler)
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/home', (req, res)=>{
    res.send("<h1>Welcome to Home</h1>")
})

app.get('/:slug', (req, res)=>{
    // for url: http://localhost:3000/blog?mode=dark&region=bd
    console.log(req.params)
    console.log(req.query)
    res.send(`<h1>I am ${req.params.slug} page</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

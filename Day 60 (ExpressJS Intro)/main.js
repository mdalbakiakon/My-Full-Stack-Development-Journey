const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World2222!</h1>')
})

app.get('/home', (req, res)=>{
    res.send("<h1>Welcome to Home</h1>")
})

app.get('/:slug', (req, res)=>{
    res.send(`<h1>I am ${req.params.slug} page</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

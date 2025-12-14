const express = require('express')
const { root } = require('postcss')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchText = "Search Now"
  res.sendFile('views/index.html', {root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
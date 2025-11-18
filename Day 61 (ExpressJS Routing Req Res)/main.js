const express = require('express')
const app = express()
const port = 3000

// get request has limitation say 2083 character in the URL otherwise giving 414 error which is too long URL
// 2KB~8KB is the size of get request



app.get('/', (req, res) => {
  console.log('This is a get request') //console just print in the running terminal
  res.send('Hello World!') //res send the info to the direct html page
})


app.use(express.static('public'))


app.post('/', (req, res)=>{
  console.log('This is a post request')
  res.send('post request')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

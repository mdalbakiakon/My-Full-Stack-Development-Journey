const express = require('express')
const path = require('path')   // 👈 add this
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './views')

// 👇 THIS LINE FIXES YOUR ISSUE
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  let siteName = "Siam"
  let searchText = "Search What You Want"
  res.render('index', { siteName, searchText })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

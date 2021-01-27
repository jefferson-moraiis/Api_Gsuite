const express = require('express')
const app = express() 
const listUSer = require('./index')
const port = 3000

app.get('/', (req, res) => {
  res.send(listUSer)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


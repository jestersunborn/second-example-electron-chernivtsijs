const fs = require('fs')
const express = require('express')
const app = express()

const persons = fs.readFileSync('./data.json', 'utf-8')

app.get('/myurl', (req, res) => {
  res.json(JSON.parse(persons))
  res.end()
})

const PORT = 8080

app.listen(PORT, 'localhost', err => {
  if (err) return console.log(err)
  console.log(`listening on port ${PORT}`)
})

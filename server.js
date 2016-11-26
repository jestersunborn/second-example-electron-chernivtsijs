const express = require('express')
const app = express()
const fs = require('fs')

const persons = fs.readFileSync('./data.json', 'utf-8')

app.get('/myurl', (req, res) => {
  res.json(JSON.parse(persons))
  res.end()
})

const PORT = 1488

app.listen(PORT, 'localhost', err => {
  if (err) return console.log(err)
  console.log(`listening on port ${PORT}`)
})

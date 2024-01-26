const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', function (req, res) {
  res.send('Hello World from Express')
})

app.listen(port, () => {
  console.log(`Mike app listening on port ${port}`)
})
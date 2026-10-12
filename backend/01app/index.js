const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Aditya')
})

app.get('/Login',(req,res)=>{
    res.send('<h1>kirmada</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
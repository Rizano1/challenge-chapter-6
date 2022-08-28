const express = require('express')
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()
const app = express()

app.get('/',(req, res) => {
    res.send('hello world')
})

app.get('/login',(req, res) => {
    
})

app.listen(3000, () => {
    console.log('running at localhost 3000')
})
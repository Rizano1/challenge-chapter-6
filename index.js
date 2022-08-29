const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const jsonParser = bodyParser.json()
const app = express()

app.use('/css', express.static(__dirname+'/css'))
app.use('/assets', express.static(__dirname+'/assets'))
app.use('/bootstrap-5.2.0-beta1-dist', express.static(__dirname + '/bootstrap-5.2.0-beta1-dist'))

app.set('view engine', 'ejs')

app.get('/',(req, res) => {
    res.send('hello world')
})

app.get('/login',(req, res) => {
    res.render("login", { css: "css/login.css" })
})

app.post('/login',(req, res) => {
    const username = Ano
    const password = Rizano789
    if(password == req.body.password && username == req.body.username){
        res.send("Authorized")
      }else{
        res.status(401).send("Unauthorized")
      }
})

app.listen(3000, () => {
    console.log('running at localhost 3000')
})
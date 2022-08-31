const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const {user_game, user_game_biodata, user_game_history} = require('./models')

const jsonParser = bodyParser.json()
const app = express()

app.use('/css', express.static(__dirname+'/css'))
app.use('/assets', express.static(__dirname+'/assets'))
app.use('/bootstrap-5.2.0-beta1-dist', express.static(__dirname + '/bootstrap-5.2.0-beta1-dist'))
app.use('/js', express.static(__dirname+'/js'))

app.set('view engine', 'ejs')

// DISPLAY 
app.get('/',(req, res) => {
    res.send('hello world')
})

app.get('/login',(req, res) => {
    res.render("login", { css: "css/login.css" })
})



// CREATE

app.post('/user_game', jsonParser, async (req, res) => {
    const data = await user_game.create ({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    res.status(201).send(data)
})

// READ


// UPDATE


// DELETE


// VALIDATION
app.post('/login', jsonParser, (req, res) => {
    const username = 'Ano'
    const password = 'Rizano789'
    if(password == req.body.password && username == req.body.username){
        res.send("Authorized")
      }else{
        res.status(401).send("Unauthorized")
      }
})

app.listen(3000, () => {
    console.log('running at localhost 3000')
})
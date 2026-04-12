const express = require('express')
const path = require('path')
const app = express()
const routes = require('./routes/index')
const session = require('express-session')
const passport = require('passport') 
require('./config/passport')

app.set('view engine','ejs')
app.set('viwes',path.join(__dirname,'views'))

//passport meddlware config


app.use(session({
    secret:'cats',
    resave:false,
    saveUninitialized:false
}))
app.use(passport.session())

app.use((req,res,next)=>{
    console.log(req.session)
    console.log(req.user)
    next()
})


app.use(express.urlencoded({extended:true}))
app.use(routes)

app.listen(process.env.PORT)


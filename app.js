const express = require('express')
const path = require('path')
const app = express()

app.set('views engine','ejs')
app.set('viwes',path.join(__dirname,'views'))

app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT)


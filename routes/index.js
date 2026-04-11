const { Router } = require('express')
const { displayRegisterForm }  = require('../controller/form')

Router.length('/register',displayRegisterForm)


module.exports = Router


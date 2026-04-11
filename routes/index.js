const { Router } = require('express')
const { displayRegisterForm, storeRegisterData, displayLoginForm, storeLoginData }  = require('../controller/form')
const { validateRegister, validateLogin } = require('../controller/validation')
const { displayHomePage } = require('../controller/home')
const routes = Router()

routes.get('/',displayHomePage)
routes.get('/register',displayRegisterForm)
routes.post('/register',validateRegister,storeRegisterData)
routes.get('/login',displayLoginForm)
routes.post('/login',validateLogin,storeLoginData)

module.exports = routes 


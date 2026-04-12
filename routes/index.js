const { Router } = require('express')
const { displayRegisterForm, storeRegisterData, displayLoginForm, storeLoginData }  = require('../controller/form')
const { validateRegister, validateLogin, validateMessage } = require('../controller/validation')
const { displayHomePage, storeMessage, deleteMessage } = require('../controller/home')
const { authenticateUser } = require('../controller/authentication')
const passport = require('passport')
const routes = Router()

routes.get('/',displayHomePage)
routes.post('/',validateMessage,storeMessage)
routes.get('/delete',deleteMessage)
routes.get('/register',displayRegisterForm)
routes.post('/register',validateRegister,storeRegisterData)
routes.get('/login',displayLoginForm)
routes.post('/login',validateLogin,passport.authenticate('local'),storeLoginData)

module.exports = routes 


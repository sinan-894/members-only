const { Router } = require('express')
const { displayRegisterForm, storeRegisterData, displayLoginForm }  = require('../controller/form')
const { validateRegister } = require('../controller/validation')
const routes = Router()

routes.get('/register',displayRegisterForm)
routes.post('/register',validateRegister,storeRegisterData)
routes.get('/login',displayLoginForm)

module.exports = routes 


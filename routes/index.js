const { Router } = require('express')
const { displayRegisterForm, storeRegisterData }  = require('../controller/form')
const { validateRegister } = require('../controller/validation')
const routes = Router()

routes.get('/register',displayRegisterForm)
routes.post('/register',validateRegister,storeRegisterData)

module.exports = routes 


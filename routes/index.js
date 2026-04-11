const { Router } = require('express')
const { displayRegisterForm }  = require('../controller/form')
const router = Router()

router.get('/register',displayRegisterForm)


module.exports = Router


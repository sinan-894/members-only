

const passport = require('passport')


function authenticateUser(req,res,next){
    passport.authenticate('local')
    next()
}


module.exports = {
    authenticateUser
}
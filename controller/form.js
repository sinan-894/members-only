const { insertIntoUsers } = require("../database/queries")
const { hashPassword } = require("../helpers/helper")



async function displayRegisterForm(req,res,next) {
    res.render('register',{})
    
}

async function storeRegisterData(req,res) {
    console.log(res.locals.data)
    try{
        insertIntoUsers({
            username:res.locals.data.username,
            password:await hashPassword(res.locals.data.password),
            fullname:res.locals.data['full-name']

        })
        res.redirect('/')
    }
    catch(error){
        console.log(error.log)
        next(error)
    }
    
}

function displayLoginForm(req,res,next){
    res.render('login')
}

async function storeLoginData(req,res,next) {
    console.log(res.locals.data)
    res.redirect('/')
    
}


module.exports = {
    displayRegisterForm,
    storeRegisterData,
    displayLoginForm,
    storeLoginData,
}
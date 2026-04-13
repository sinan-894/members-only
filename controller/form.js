const { insertIntoUsers } = require("../database/queries")
const { hashPassword } = require("../helpers/helper")



async function displayRegisterForm(req,res,next) {
    res.render('register',{})
    
}

async function storeRegisterData(req,res) {
    try{
        insertIntoUsers({
            username:res.locals.data.username,
            password:await hashPassword(res.locals.data.password),
            fullname:res.locals.data['full-name']

        })
        res.redirect('/login')
    }
    catch(error){
        console.log(error.log)
        next(error)
    }
    
}

function displayLoginForm(req,res,next){
    res.render('login',{session:req.session})
}



module.exports = {
    displayRegisterForm,
    storeRegisterData,
    displayLoginForm,
}
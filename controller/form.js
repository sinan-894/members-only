


async function displayRegisterForm(req,res,next) {
    res.render('register',{})
    
}

async function storeRegisterData(req,res) {
    console.log(res.locals.data)
    res.redirect('/')
    
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
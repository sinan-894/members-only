


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


module.exports = {
    displayRegisterForm,
    storeRegisterData,
    displayLoginForm,
}
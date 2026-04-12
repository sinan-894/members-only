
const messagesTest = [
    {
        author:'messi',
        date:new Date(),
        text:'hi this is test message'
    },
    {
        author:'ronaldo',
        date:new Date(),
        text:'hi this is also test siuuuuu'
    }
]
function displayHomePage(req,res,{errors=[]}={}){
    res.render('homepage',{
        isLogin:true,
        isMember:true,
        messages:messagesTest,
        errors:errors
    })
}

function storeMessage(req,res){
    console.log(res.locals.message)
    res.redirect('/')
}

module.exports = {
    displayHomePage,
    storeMessage,
}
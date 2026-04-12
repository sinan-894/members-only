
const messagesTest = [
    {
        id:1,
        author:'messi',
        date:new Date(),
        text:'hi this is test message'
    },
    {
        id:2,
        author:'ronaldo',
        date:new Date(),
        text:'hi this is also test siuuuuu'
    }
]
function displayHomePage(req,res,{errors=[]}={}){
    res.render('homepage',{
        isLogin:true,
        isMember:true,
        isAdmin:false,
        messages:messagesTest,
        errors:errors
    })
}

function storeMessage(req,res){
    console.log(res.locals.message)
    res.redirect('/')
}

function deleteMessage(req,res){
    console.log(req.query.id)
    res.redirect('/')
}

module.exports = {
    displayHomePage,
    storeMessage,
    deleteMessage,
}
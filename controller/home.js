
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
function displayHomePage(req,res){
    
    res.render('homepage',{
        isLogin:req.user,
        isMember:req.user && req.user.is_member,
        isAdmin:req.user && req.user.is_admin,
        fullname:req.user && req.user.fullname,
        messages:messagesTest,
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

function addMember(req,res){
    if(!req.user) return res.redirect('/')
    console.log('new member',req.user.id)
}

module.exports = {
    displayHomePage,
    storeMessage,
    deleteMessage,
    addMember,
}
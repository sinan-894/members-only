const { updateMembershipInUsers, insertIntoMessages } = require("../database/queries")
const { formatDate } = require("../helpers/helper")

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
    if(!req.user) return res.redirect('/')
    const id = req.user.id
    insertIntoMessages({
        id:id,
        text:res.locals.message,
        date:formatDate()
    })
    res.redirect('/')
}

function deleteMessage(req,res){
    console.log(req.query.id)
    res.redirect('/')
}

async function addMember(req,res){
    if(!req.user) return res.redirect('/')
    console.log('new member',req.user.id)
    await updateMembershipInUsers(req.user.id)
    
    res.redirect('/')
}

function logout(req,res,next){
    req.logout((err)=>{
        if(err){
            next(err)
        }
        res.redirect('/')
    })
}

module.exports = {
    displayHomePage,
    storeMessage,
    deleteMessage,
    addMember,
    logout,
}
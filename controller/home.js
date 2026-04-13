const { updateMembershipInUsers, insertIntoMessages, getAllMessages, deleteUserFromUsers } = require("../database/queries")
const { formatDate } = require("../helpers/helper")

async function displayHomePage(req,res){
    
    res.render('homepage',{
        isLogin:req.user,
        isMember:req.user && req.user.is_member,
        isAdmin:req.user && req.user.is_admin,
        fullname:req.user && req.user.fullname,
        messages:await getAllMessages(),
    })
}

function storeMessage(req,res){
    if(!req.user) return res.redirect('/')
    const id = req.user.id
    insertIntoMessages({
        id:id,
        text:res.locals.message,
        date:formatDate()
    })
    res.redirect('/')
}

async function deleteMessage(req,res){
    console.log(req.query.id)
    await deleteUserFromUsers(req.query.id)
    res.redirect('/')
}

async function addMember(req,res){
    if(!req.user) return res.redirect('/')
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
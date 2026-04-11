
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
function displayHomePage(req,res,next){
    res.render('homepage',{
        isLogin:false,
        isMember:false,
        messages:messagesTest
    })
}


module.exports = {
    displayHomePage,
}
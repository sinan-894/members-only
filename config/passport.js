const passport  = require('passport')
const { isPasswordMatch } = require('../helpers/helper')
const { getUserDataById,getUserDataByUsername } = require('../database/queries')
const LocalStrategy = require('passport-local').Strategy


const verifyCallback =async (username,password,done)=>{
    try{
        const user = await getUserDataByUsername(username)
        const match = await isPasswordMatch(password,user.password)
        if(!user)return done(null,false,{message:'no user found'})
        if(!await isPasswordMatch(password,user.password)) return done(null,false,{message:"invalid password"})
        
        return done(null,user)
    }
    catch(error){
        console.log(error)
        done(error)
    }
    
    
}

passport.use( new LocalStrategy(verifyCallback) )

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async (id,done)=>{
    try{
        const user = await getUserDataById(id)
        done(null,user)
    }
    catch(err){
        done(err)
    }
})

module.exports = passport
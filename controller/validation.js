const {body,validationResult, matchedData} = require('express-validator')
const { displayHomePage } = require('./home')


exports.validateRegister = [
    body('full-name')
        .trim()
        .isLength({max:50,min:1}).withMessage('full name can only contain maximum 50 charachters'),
    body('username')
        .trim()
        .isLength({max:50,min:1}).withMessage('username can only contain maximum 50 charachters'),
    body('password')
        .isLength({min:3}).withMessage('password must atleast be 3 charachters long'),
    body('password-confirm')
        .custom((value,{req})=> value === req.body.password).withMessage('passwords does not match'),
    (req,res,next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).render('register',{errors:errors.array()})
        }
        res.locals.data = matchedData(req)
        next()
    }
]


exports.validateLogin = [
    body('username'),
    body('password'),
   (req,res,next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).render('login',{errors:errors.array()})
        }
        res.locals.data = matchedData(req)
        next()
   }
]

exports.validateMessage = [
    body('message').not().isEmpty().withMessage('message cannot be empty'),
    (req,res,next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.status(400)
            res.locals.errors = errors.array()
            return displayHomePage(req,res)
        }
        res.locals.message = matchedData(req)
        next()
        
    }
]

exports.validateMembersPassword = [
    body('membership-password')
        .custom(value=>value==process.env.MEMBERSHIP_PASSWORD).withMessage('Wrong password'),
    (req,res,next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.locals.isMembershipPasswordNotMatch = true 
            return displayHomePage(req,res)

        }
        next()
    }
]
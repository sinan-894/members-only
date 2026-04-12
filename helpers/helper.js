const bcrypt = require('bcryptjs')

exports.hashPassword = async (password)=>{
    return await bcrypt.hash(password,10)
}

exports.isPasswordMatch = async (password,check)=>{
    return await bcrypt.compare(password,check)
}

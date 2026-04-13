const bcrypt = require('bcryptjs')

exports.hashPassword = async (password)=>{
    return await bcrypt.hash(password,10)
}

exports.isPasswordMatch = async (password,check)=>{
    return await bcrypt.compare(password,check)
}

exports.formatDate = () => {
    const date = new Date()
    return date.toISOString().split('T')[0];
}
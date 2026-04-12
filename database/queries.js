const { hashPassword } = require('../helpers/helper')
const pool = require('./pool')


async function insertIntoUsers({fullname,username,password}) {
    const hashedPassword = hashPassword(password)
    await pool.query(`
        INSERT INTO users (fullname,username,password)
        VALUES ($1,$2,$3);
        `,[fullname,username,hashedPassword])
    
}


async function insertIntoMessages({id,text,date}) {
    await pool.query(`
        INSERT INTO messages (user_id,text,date)
        VALUES ($1,$2,$3);
        `,[id,text,date])

    
}

async function deleteUserFromUsers({id}) {
    await pool.query(`
        DELETE FROM users
        WHERE id=$1;
        `,[id])

    
}

module.exports = {
    insertIntoMessages,
    insertIntoUsers,
    deleteUserFromUsers,
}

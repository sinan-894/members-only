const { use } = require('passport')
const pool = require('./pool')


async function insertIntoUsers({fullname,username,password}) {
    await pool.query(`
        INSERT INTO users (fullname,username,password)
        VALUES ($1,$2,$3);
        `,[fullname,username,password])
    
}


async function insertIntoMessages({id,text,date}) {
    await pool.query(`
        INSERT INTO messages (user_id,text,date)
        VALUES ($1,$2,$3);
        `,[id,text,date])

    
}

async function deleteUserFromUsers(id) {
    await pool.query(`
        DELETE FROM messages 
        WHERE id=$1;
        `,[id])

    
}

async function getAllMessages() {
    const {rows} = await pool.query(`
        SELECT messages.id as id,users.fullname as author,date,text
        FROM messages INNER JOIN users
        ON users.id = messages.user_id;
        `)
    return rows
    
}

async function getUserDataByUsername(username) {
    const {rows} = await pool.query('select * from users where username=$1;',[username])
    return rows[0]
    
}

async function getUserDataById(id) {
    const {rows} = await pool.query('select * from users where id=$1;',[id])
    return rows[0]
    
}

async function updateMembershipInUsers(id) {
    await pool.query('update users set is_member=TRUE where id=$1;',[id])
    
    
}

module.exports = {
    insertIntoMessages,
    insertIntoUsers,
    getUserDataById,
    getUserDataByUsername,
    deleteUserFromUsers,
    updateMembershipInUsers,
    getAllMessages,
}

const {Client} = require('pg')


const SQL = `
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR(255)  ,
        fullname VARCHAR(255) ,
        password varchar(255) , 
        is_member BOOLEAN DEFAULT FALSE,
        is_admin BOOLEAN DEFAULT FALSE
    );
    
    CREATE TABLE IF NOT EXISTS messages(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        user_id INTEGER,
        text TEXT,
        date DATE
    );
`

async function main() {
   const client  = new Client({
    connectionString:process.env.CONNECTION_STRING
   }) 
   await client.connect()
   await client.query(SQL)
   await client.end()
   console.log('done');
}

main()
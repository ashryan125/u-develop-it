const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // mysql username
        user: 'root',
        //sql password
        password: 'password',
        database: 'election'
    },
    console.log('Connected to the election database')
);

module.exports = db;
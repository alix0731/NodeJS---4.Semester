const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'Ali010298',
    database: "User"
});

module.exports.connection = connection;
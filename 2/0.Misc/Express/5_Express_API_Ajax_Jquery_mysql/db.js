const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ali010298",
    database: "noter"
});

module.exports.connection = connection;
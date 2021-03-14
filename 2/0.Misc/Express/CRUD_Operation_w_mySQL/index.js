const express = require("express");
const mysql = require("mysql");

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'Ali010298',
    database: 'MySample',
    multipleStatements: true
});


connection.connect(error =>{
    if(error){
        console.log(error);
    }
    else{
        console.log("MySQL connected. . .");
    }
});

// get all
app.get("/", (req, res)=>{
    connection.query("SELECT * FROM MySampleTable", (error, rows, fields) => {
        if(error){
            console.log(error);
        }
        else{
            console.log("query OK");
            res.send({data: rows});
        }
    });
});

// get by id
app.get("/:id", (req, res)=>{
    connection.query("SELECT * FROM MySampleTable WHERE id = ?", [req.params.id], (error, rows, fields) => {
        if(error){
            console.log(error);
        }
        else{
            console.log("query OK");
            res.send({data: rows});
        }
    });
});

//Delete by id
app.delete("/:id", (req, res)=>{
    connection.query("DELETE FROM MySampleTable WHERE id = ?", [req.params.id], (error, rows, fields) => {
        if(error){
            console.log(error);
        }
        else{
            console.log("query OK");
            res.redirect("/");
        }
    });
});

//create
app.post("/", (req, res)=>{
    let customer = req.body;
    const sql = "INSERT INTO MySampleTable(name) VALUES(?)";
    connection.query(sql, [customer.name], (error, rows, fields) => {
        if(error){
            console.log(error);
        }
        else{
            console.log("query OK");
            res.redirect("/");
        }
    });
});

//update
app.patch("/", (req, res)=>{
    let customer = req.body;
    const sql = "UPDATE MySampleTable SET name = ? WHERE id = ?";
    connection.query(sql, [customer.name, customer.id], (error, rows, fields) => {
        if(error){
            console.log(error);
        }
        else{
            console.log("query OK");
            res.redirect("/");
        }
    });
});





app.listen(8080, (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('Running on port', 8080);
    }
});
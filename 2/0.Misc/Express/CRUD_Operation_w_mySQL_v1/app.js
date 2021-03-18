
const express = require("express");
const mysql = require("mysql");

const db = require("./db");

const app = express();
app.use(express.json());

const PORT = 8080;


db.connection.connect(error =>{
    if(error){
        console.log(error);
    }
    else{
        console.log("MySQL connected. . .");
    }
});

//GET

app.get("/", (req, res)=>{

db.connection.query("SELECT * FROM users", (error, rows, fields)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("query sent");
        res.send({data: rows});

    }
});
});

// get by id
app.get("/:id", (req, res) => {
    db.connection.query("SELECT * FROM users where id = ?", [req.params.id], (error, rows, fields)=> {
        if (error) {
            console.log(error);
        }
        else{
            console.log("query OK");
            res.send({data: rows});
        }
    });
});

// post
app.post("/", (req, res)=>{
    let user = req.body;
    db.connection.query("INSERT INTO users(name) VALUES(?)", [user.name], (error, rows, fields)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log("Posted");
            res.redirect("/");
        }

    })
});

//delete by id
app.delete("/:id", (req, res) => {
    db.connection.query("delete from users where id = ?", [req.params.id], (error, rows, fields)=>{
        if (error) {
            console.log(error);
        } else {
            console.log("Query OK");
            res.redirect("/");
        }
    });
});

// update
app.patch("/", (req, res) => {
    let user = req.body;
    db.connection.query("update users SET name = ? where id = ?", [user.name, user.id], (error, rows, fields)=>{
        if (error) {
            console.log(error);
        } else {
            console.log("Query OK");
            res.redirect("/");
        }
    });
});


app.get("/page/index", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
});

// app.post("/posted", (req,res) =>{
//     console.log(req.body);
//     res.redirect("/page/index");
// });


app.listen(PORT, (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Server is running on PORT:", PORT);
    }
});

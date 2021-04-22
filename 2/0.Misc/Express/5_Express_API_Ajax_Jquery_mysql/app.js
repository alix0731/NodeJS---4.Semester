const express = require("express");
const db = require("./db");
const app = express();

app.use(express.json());
app.use(express.static('public'));
const PORT = 8080;

db.connection.connect(error =>{
    if (error) {
        console.log(error);
    } else {
        console.log("DB connected");
    }
});

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});


// 1.GET data from database to HTML page
app.get("/todos", (req, res)=> {
    db.connection.query("SELECT * FROM todo", (error, rows, fields)=>{
        if (error) {
            console.log(error);
        } else {
            console.log("Query OK");
            res.send(rows);
        }
    });
});



app.listen(PORT, (error)=>{
    if (error) {
        console.log(error);
    } else {
        console.log("Server is running on port:", PORT);
    }
});
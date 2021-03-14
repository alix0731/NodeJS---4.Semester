const express = require("express");
const mysql = require("mysql");
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;

// connect to mysql

const connection = mysql.createConnection({
    //properties...
    host: 'localhost',
    user: 'admin',
    password: 'Ali010298',
    database: "MySample"

});


connection.connect((error)=>{
    if(!!error){
        console.log(error);
    }
    else{
        console.log("Connected succesfully");
    }
});

app.get('/:id', (req, res)=>{
    // about mysql
    connection.query("SELECT * FROM MySampleTable", (error, rows, fields)=>{
        // callback f
        if(!!error){
            console.log("ERROR in the query");
        }
        else{
            console.log("Query succes");
            
            res.send({data: rows[Number(req.params.id)]});
        }
    });
});

// get all



// get id by name


// create


// delete


//edit



app.listen(port, (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Server running on port", port);
    }
});
const express = require("express");
const app = express();

const fs = require("fs"); // læser html klasser 

// needed to send body == pas the body as JSON
app.use(express.json());

// how do you send data with a GET request?
// = in the URL = query parameters
// 8080?key=value

app.get("/search", (req, res) => {
    // req.query is an javascript object
    res.send({searchquery: req.query});
})

console.log();

// create another path variable called name
// req.params henter path variable værdien
app.get("/telegram/:msg/:name", (req, res) => {
    const message = req.params.name + ", " + req.params.msg
    res.send(
        { 
        msg: message
        }
    );
    console.log(req.params.msg);
});



///POST
app.post("/goodstuff", (req, res) => {
    console.log(req.body);
    res.send({body: req.body});
});

app.listen(8081, ()=> console.log("running on port 8081"));
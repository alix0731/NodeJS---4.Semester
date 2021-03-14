const express = require("express");
const app = express();

app.use(express.json());

// GET
app.get("/", (req, res) => {
    res.send({message: "Hello world"});
});


// GET query parameter
app.get("/search", (req, res) => {
    res.send({search : req.query});
    console.log(req.query);
});

// PATH

app.get("/telegram/:name", (req, res)=> {
    res.send({path: req.params.name});
});

let users = [
    {id: 1, name: "Ali"},
    {id: 2, name: "Raza"},
    {id: 3, name: "Akhtar"}
];

//POST
app.post("/created", (req, res)=>{
    
    //users.push(req.body);
    console.log("created");
    res.send(req.body);
    
    users.push(req.body);

});

//GET
app.get("/users", (req, res)=>{
    res.send({users: users});
});


//DELETE
app.delete("/deleted", (req, res)=>{
    users.pop(req.body);
    res.send(req.body);
});

// FIND by ID
app.get("/user/:id", (req, res) => {
    const user = users.filter(user => user.id == req.params.id);
    if(!user) res.send("Id not found");
    res.send(user);
});




app.listen(8081, ()=> console.log("running on port 8081 now"));
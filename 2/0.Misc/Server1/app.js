const express = require("express");
const app = express();


let list = [

];

// router med endpoint ("/")
app.get("/", (req, res) => {
    res.send(list);
});


app.post("/create", (req, res) => {
    const user = req.body;
    list.push(user);
    res.send(list);
});



app.listen(8080, ()=> console.log("Server startet on port 8080"));
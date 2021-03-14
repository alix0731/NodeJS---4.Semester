const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/p/index.html");
});

app.get("/pizza", (req, res)=>{
    res.sendFile(__dirname + "/p/pizza.html");
});


app.get("/shop", (req, res)=>{
    if(Number(req.query.money) > 500){

        res.redirect("/pizza");
    }
    else{
        res.send({manager: "go and get som money, your bastard"});
    }
});



const port = process.env.PORT || 8080; 


app.listen(port, (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Server running on port", port);
    }
});
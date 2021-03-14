const express = require("express");
const app = express();
app.use(express.json());


// __dirname fortæller hvilken mappe jeg er i
console.log(__dirname);


app.get("/", (req, res)=>{
    // todo
    res.sendFile(__dirname + "/public/welcome.html");
});

app.get("/about", (req, res)=>{
    
    res.sendFile(__dirname + "/public/about.html");
    
});

app.get("/pizza", (req, res)=>{

    res.sendFile(__dirname + "/public/pizza.html");
});

app.get("/juice", (req, res)=>{
    res.send({hello: "BOOOOOOM"});
});

app.get("/masjid", (req, res) =>{


    if(Number(req.query.money) > 500){
        res.redirect("/juice");
    }
    else{
        res.send({Dorman: "Sorry mate np juice for you"});
    }
});

// process is the main thread
// hvis process port ikke er sat, så sæt til 8080
const port = process.env.PORT || 8080;



app.listen(port, (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Server is running on port:", port);
    }
});
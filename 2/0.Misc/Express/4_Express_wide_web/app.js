const express = require("express");
const app = express();

app.use(express.json()); // modtager data i form af json
app.use(express.static('public')); // giver tilladelse til at loade js og css filer

const fetch = require('node-fetch');

// __dirname fortæller hvilken mappe jeg er i
console.log(__dirname);


app.get("/", (req, res)=>{
    // todo
    res.sendFile(__dirname + "/public/welcome/welcome.html");
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

app.get("/candle", (req, res)=>{
    if(req.query.blow){
        return res.send({lightsOn: false});
    }
        res.send({lightsOn: true});
});



app.get("/catfacts", (req, res )=>{
    res.sendFile(__dirname + "/public/catfacts/catfacts.html");
});

app.get("/proxy", (req, res )=>{
    fetch("https://www.google.com")
    .then(res => res.textConverted())
    .then(body => res.send(body));
});



// process is the main thread
// hvis process port ikke er sat, så sæt til 8080
const port = process.env.PORT || 8080;


const server = app.listen(port, (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Server is running on port:", server.address().port);
    }
});



//Jquery kan ændre html ved hjælp af js
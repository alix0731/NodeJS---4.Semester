const express = require("express");
const app = express();


app.use(express.json()); // makes req.body to json

let anime_names = [
{
    id: 1,
    title: "Attack on Titan",
    weirdness: 6.8
},
{
    id: 2,
    title: "One Punch Man",
    weirdness: 9.8
}
];

let AUTOINCREMENT = 2;

//GET
app.get("/anime_names", (req, res)=>{
    res.send({anime: anime_names});
});

app.get("/anime_names/:id", (req, res)=>{
    const animeNameId = req.params.id;
    const foundAnime = anime_names.find(anime => anime.id === animeNameId);
    res.send({data: foundAnime});
});

app.post("/anime_name", (req, res)=>{
    const newAnimeName  = req.body;
    newAnimeName.id = ++AUTOINCREMENT; 
    anime_names.push(newAnimeName);
    res.send({data: req.body});
});
let monke = {banana: "good"};
let krab = {epiphany: "krab"};
console.log({...monke, ...krab});

// patch update path of a resource
app.patch("anime_names/:id", (req, res)=>{
    anime_names = anime_names.map(animeName =>{
        if(animeName.is === Number(req.params.id)){
           
            return { ...animeName, ...req.body, id: animeName.id}; // id: bliver altid det samme, selv om man skulle ændre det i req.body
        }
        return animeName;
    });
    res.send({data: wasUpdated});
});

app.delete("/anime_names/:id", (req, res)=>{
    anime_names = anime_names.filter(animeName => animeName.id !== Number(req.params.id));
    res.send({
        data: anime_names
    });
});


app.listen((8080), (error)=>{
    if(error){
        console.log(error);
    }
    console.log("SERVER is running on port", 8080);
});
const express = require("express");
const app = express();

app.use(express.json()); // når man får en post requests, så kan req.body blive omdannet til json

const BMW = require("./Car.json");

console.log(BMW.name);


const PORT = 8080;

let cars = [];
cars.push({id: 1, name: "BMW"});
cars.push({id: 2, name: "Audi"});
cars.push({id: 3, name: "Mercedes"});


app.get("/", (req, res) => {
    res.send(cars);
});

// create
app.post("/posted", (req, res)=>{
    /// tilføj ny bil til listen
    cars.push(req.body);

    // return
    res.send({status: "created"});
});

// get by name
app.get("/:name", (req, res)=>{
   console.log(req.params.name);
    const car = cars.filter(car => car.name == req.params.name);
    res.send(car);
});

// delete 
app.delete("/deleted", (req, res) => {
    
    cars = cars.filter(car => car.name != req.body.name);
    res.send({response: "Deleted"});
});


// put 
app.put("/edited", (req, res)=> {
    cars = cars.map(car => {
        if(car.id == req.body.id){
            return req.body;
        }
        else{
            return car;
        }
    });

    res.send({response: "Edited"});
});



app.listen(PORT, (error)=> {
    if(error){
        console.log(error);
    } 
    else{
        console.log(`Running on port ${PORT}`);
    }
});
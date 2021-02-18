const express = require("express");
const app = express();


app.get("/", (req, res)=> {
    // send an empty json as response
    res.send({});
});


// create a route on endpoint me which sends back a json that represents you

app.get("/me", (req, res) => {
    res.send({name: "Ali Raza", age: 13});
})


app.listen(8080, () => console.log("Server running on port 8080")); // server starts and starts a process on port
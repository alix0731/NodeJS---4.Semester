const express =  require("express");
const app = express();

// consider what datatype tp store your data in
//you are allowed to hardcord it 

app.get("/", (req, res) => {
    res.send({ message: "First call to /"});
});

app.get("/anotherpath/id", (req, res) =>{
    const id = 1;
    res.send({data : "Some other things"});
});

/// bottom
app.listen(8080, () => console.log(8080));
const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = 8080;


//Homepage
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/basic", (req, res) => {
    res.sendFile(__dirname + "/public/basic.html");
});

app.get("/commandlines", (req, res) => {
    res.sendFile(__dirname + "/public/commandlines.html");
});

app.get("/express", (req, res) => {
    res.sendFile(__dirname + "/public/express.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
})


app.listen(PORT, (error)=>{
    if (error) {
        console.log(error);
    }
    else{
        console.log("Server runnning on port", PORT);
    }
});
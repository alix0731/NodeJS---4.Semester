const { json } = require("express");
const express = require("express");
const app = express();

const PORT = 8080;

app.use(express.static('public')); // betyder at file i public kan udveksles 
app.use(express.json());
app.use(express.urlencoded({extended: true})); // burges til at hente data fra post fra andre filer

// how to  i I import projects.js?
const projectsRouter = require("./routes/projects.js");
const contactRouter = require("./routes/contacts.js");
const emailRouter = require("./routes/email.js")


app.use(projectsRouter.router);
app.use(contactRouter.router);
app.use(emailRouter.router);




const fs = require("fs"); 
const { send } = require("process");
const projects = require("./routes/projects.js");


//header
const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
//body
const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");

//footer
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

//projects
const projectspage = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");
const addproject = fs.readFileSync(__dirname + "/public/projects/createProjects.html", "utf-8");
//contacts 
const contactpage = fs.readFileSync(__dirname + "/public/contacts/contacts.html", "utf-8");

 //base template
 //const basetemplate = fs.readFileSync(__dirname + "/public/basetemplate.html", "utf-8");
 //const koala = basetemplate.replace("{{BODY}}", "Hello world with replace").replace("{{KOALA_FACTS}}", "Koala is big");


//Server-side rendering
//read the html as text
// send the text content to client

//in Node there are two  ways to read a file
// async: correct 99.9% of the time
// sync

app.get("/", (req, res) =>{

    //res.sendFile(__dirname + "/public/frontpage/frontpage.html");
    /*fs.readFile(__dirname + "/public/frontpage/frontpage.html", (error, data)=> {
        if(error)
            console.log(error);
        res.write(data);
    });
*/
    res.send(header + frontpage + footer);

});

app.get("/projects", (req, res)=>{
    res.send(header + projectspage + footer);
});
app.get("/addproject", (req, res) => {
    res.send(header + addproject + footer);
});

app.get("/contacts", (req, res)=>{
    res.send(header + contactpage + footer);

});


//app.get("/koala", (req, res)=>{
//    res.send(koala);
//});





const server = app.listen(process.env.PORT || 8080, (error)=>{
if(error){
    console.log(error);
}
else{
    console.log("Server running on port", server.address().port);
}
});

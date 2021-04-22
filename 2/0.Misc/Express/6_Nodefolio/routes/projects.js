const router = require("express").Router();


/**

Project Schema
Title - (string)
Description: (string)
Language(s): (array)
Tech used: (array)
Image: (string)
HostedLink: (string)
GitLink: (string)

 */

const koala = "bob";

console.log({ koala });

const projects = [{
    id: 1,
    title: "Nodefolio",
    description: "Personal portfolio implemented in Node.js",
    startdate: new Date("2021-04-08"),
    enddate: new Date("2021-04-15"),
    gitLink: ""
},
{
    id: 2,
    title: "BankJob",
    description: "Making a big system",
    startdate: new Date("2021-04-08"),
    enddate: new Date("2021-04-15"),
    gitLink: ""
}]


router.get("/api/projects", (req, res) => {
    res.send({projects});
});

router.get("/api/details/:id", (req, res) => {
    var obj = projects.filter(p => p.id == req.params.id);
    console.log(obj);
    res.send(obj);
});




router.post("/api/addproject", (req, res) => {
    
   console.log(req.body);

   var obj = {
    title: req.body.title,
    description: req.body.description,
    startdate: new Date(req.body.startdate),
    enddate: new Date(req.body.enddate),
    gitLink: req.body.gitLink
}

projects.push(obj);

    res.redirect("/projects");
});


module.exports = {
    router: router,
    projects: projects
}
const { json } = require('express');
const express = require('express');
const app = express();

app.use(express.json());


let todo = [{id: 1, todo: "wash car"}, {id: 2, todo: "make food"}];

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});


app.get("/todo", (req, res)=>{
    res.send({Todo_List: todo});
});


// get by id
app.get("/todo/:id", (req, res)=>{
    const todoByID = todo.find(todo => todo.id == req.params.id);
    res.send({todoByID});
});

//create 
app.post("/", (req, res)=>{
    todo.push(req.body);
    res.send({created: req.body});
});

//delete
app.delete("/", (req, res)=>{
        todo = todo.filter(todo => todo.id != req.body.id);
        res.send({status: 200});
});


//edit
app.put("/", (req, res)=>{
    todo = todo.map(todo =>{
        if(todo.id === req.body.id){
            return req.body;
        }
        else{
            return todo;
        }
    });

    res.send({status: 200});
});


app.listen(8080, (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Server is running on port", 8080);
    }
})

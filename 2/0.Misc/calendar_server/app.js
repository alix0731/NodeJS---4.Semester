const express = require("express");
const app = express();

const PORT = 8080;

app.get("/" , (req, res) => {
    res.send({
        Information: "Type the following in the URL after 8080 to see one of the elements",
        Time: "/time",
        Day: "/day", 
        Month: "/month",
        Full_date: "/date"
    })
});


////time router

const today = new Date();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

app.get("/time", (req, res)=>{
    res.send({"current_time": time});
});

/////day router

let dayMap = new Map();
dayMap[1] = "monday";
dayMap[2] = "tuesday";
dayMap[3] = "wednesday";
dayMap[4] = "thursday";
dayMap[5] = "friday";
dayMap[6] = "saturday";
dayMap[7] = "sunday";

const day = today.getDay();
console.log(dayMap[day]);

app.get("/day", (req, res) =>{
    res.send({day: dayMap[day]});
})



//// month router

let month = today.getMonth();
const month_list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.get("/month", (req, res) =>{
    res.send({"month": month_list[month]});
})



//// full date router

date_today = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();

app.get("/date", (req, res) => {
    res.send({"date": date_today});
})

app.listen(PORT, () => console.log(`server startet at port: ${PORT}`));
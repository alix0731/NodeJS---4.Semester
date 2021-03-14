const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send({"msg" : 234242})
});

app.listen(8080, () => console.log("running on port 8081"))
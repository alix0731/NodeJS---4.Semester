import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [

]

/////// GET

router.get("/", (req, res) => {
    res.send(users);
});

/////// POST

router.post("/", (req, res) => {

    // henter det data som bliver posted
    const user = req.body;
    // her indsætter vi id i JSON object som vi modtager
    users.push({ ...user, id: uuidv4() });


    res.send(`User with the name ${user.name} is created `);
});



//// get user by id

router.get("/:id", (req, res) => {
    res.send("HH");
});




export default router;

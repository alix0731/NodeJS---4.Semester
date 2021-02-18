// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};

let val = myObj.message;

console.log("Opg 1: " + val);

// Log the message 

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 


const myObj1 = {
    name: "Ali",
    age: 23
}

console.log("Opg 2 : " + myObj1);


// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {
};

stackOverflow.isAllowed = true;

console.log(stackOverflow.isAllowed);

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {
    "description": "The best song in the world."
}

delete thisSong.description;
// add
thisSong.about = "Just a tribute."
// remove the property "description" and add a property called "about" that should say "Just a tribute." 

console.log(thisSong.about);

// --------------------------------------




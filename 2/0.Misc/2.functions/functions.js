


console.log(myFirstGreeting("Man kan kalde på den selvom funktionen bliver lavet efter"));

//function declaration
// hoisting er at man kan kalde på funktion lige meget om de bliver kaldt på før
function myFirstGreeting(name){
return "Hello " + name;
}

// kalder på funktionen
console.log(myFirstGreeting("Ali"));



// function med ingen navne, men med i variabler. 
// Variabler er ikke hoisted
const myvF = function(){
    console.log("test");
}


const myArrowFunction1 = function () {
console.log("Hello from the anonymous function which is alsp an arrow function");
}
// med lambda 
const myArrowFunction2 = () => {
    console.log("Hello from the anonymous function which is alsp an arrow function");
    }


myArrowFunction2();



// callback funktions
// nodeJs er bygget af det
// Det er smart da det er funktioner som man giver som argument( i parameter) i en anden funktion
// hvad er callback? det er at man kan lave flere ting på en gang


function sayHiLater(anyFunctionReference){
    //stimulate some code running
    // ...5 seconds later ...
    anyFunctionReference();
}


// call sayHiKater and oass as callback that "HI"


const sayHhello = () => {
    console.log("Hello all...");
}
const sayHi = () => {
    console.log("HI");
}

//grunden til at vi siger sayHi er fordi vi ikke skal kalde på funktionen, men blot give referrencen
sayHiLater(sayHhello);
sayHiLater(sayHi);


//----------------------------------------------

function interact(genericInteration, name){
    //den bliver til en function
    genericInteration(name);
}

// call interact and let it interact with a person of name

const poke = (name) => {
console.log("Poke " + name);
}

interact(poke, "Ali");


//---------

interact(name => ("Eat") + name, "Ali");



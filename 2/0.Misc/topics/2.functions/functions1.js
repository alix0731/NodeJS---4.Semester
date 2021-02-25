

//1.type function

// opretter function
function greetings(){
    console.log("Hello everyone");
}


//kalder på function
greetings();

//2.type function
// opretter en variable og tildeler den en function
const sayHi = function(){
    console.log("Hello from const");
}

// kalder på type 2 functions
sayHi();




// opretter en function
let substraction = function(n1, n2){
    console.log(n1 + n2);
};

//Kalder
substraction(20, 34);



// Callback functions
//Opretter en function som kan tage imod en function
const callAll = function(anyFunction, name){
    //kalder functions
    anyFunction(name);
};

//Opretter en funktion som skal ind i CallAll() som argument
const sayHello = function(name){
    console.log("Calling " + name);
}

//kalder metoden og putter en reference i parameteren, da den bliver kaldt i callAll
callAll(sayHello, "Ali");


function talk(name){
    console.log("Talking to " + name);
}

callAll(talk, "James");

callAll(name => console.log("Look at " + name), "Alus");


console.log();








//"use strict"; // throws a ERROR if variable is not rigth


// never EVER do this
//totalGlobalVariable = "My total global variable";

//let someVarToDelete = "dont hurt me";

//delete someVarToDelete;
//console.log(someVarToDelete);



// is are object truly immutable in js? NO

const myObj =  Object.freeze({
    attribute: "value"
});

myObj.attribute = "Other value"; // can do this
//myObj = "hhh"; // cant do this
console.log(myObj);

let variableA; // const can't change
let variableB; // can change

console.log(variableA + variableB); // tries to add to variables together
console.log(variableA, variableB); // her har vi to parameter 


// always compare both value and typees with === or !==, it also checks if the datatype is the same


// file level scope
{
    //this is a new 
    let scopedVariable = "abc";
    
    {
        scopedVariable = 123;
        //this is a nested scope that inherits from the previous scope
    }
    console.log(scopedVariable);
}

{
    let scopedVariable = "abc";
    {
        let scopedVariable = 123;
        console.log(scopedVariable);
    }
    console.log(scopedVariable);
}


function someApplication(){
    let myFavoritNumber = 43;
    const theirFavorite = whatYourFavorite();
    return (myFavoritNumber, theirFavorite);

}


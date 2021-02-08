// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constants

const firstName = "Anders";
const lastName = "Latif";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log("My first name is " + firstName + " and my last name is " + lastName);


// en anden måde
console.log(`My first name is ${firstName} and my last name is ${lastName}`);


// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2021
// You cannot touch line 1 or 2

const num = number + parseInt(year);
const num1 = number + Number(year);
const num2 = + year + number;


console.log(num);
console.log(num1);
console.log(num2);


// --------------------------------------




function highest_num(num1, num2, num3){

    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

const result = highest_num(10, 34, 9);

console.log("The highest number is: " + result);

/*
for(i = 0; i < 10; i++){
    console.log(i);
    for(j = 0; j < 10; j++){
        if(i == 5 && j == 5){
            console.log("BOOM");
            break;
        }
        console.log("-");
    }
}
*/



let colors = ["black", "red", "blue", "white"];

function isColor(color){
    for(i = 0; i < colors.length; i++){
        if(color == colors[i]){
            console.log("The color is in here...");
        }
    }
}


let a = "black";

isColor(a.toLocaleLowerCase());



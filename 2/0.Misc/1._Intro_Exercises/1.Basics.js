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

// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 

console.log(letters[1]);


// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

const jamie = {
    name: "jamie",
    age: 30
};

friends.push(jamie);
friends.push(
    {
        name: "ALi",
        age: 2
    });

console.log(friends);
// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

console.log("Index: " + significantMathNumbers.indexOf(1729));

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 


// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

diet.splice(2, 0, "hamburger", "soda", "pizza");

console.log(diet);

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket




// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

let arr = ["Hans", "Peter", "James"];

//pop metode fjerner den sidste element i arrayet
arr.pop();

console.log(arr);



// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

// hvis man bruger slice giver man data til et ny array, hvor imod hvis man bare sagde = diet, så refererer man tilbage til den gamle array
let dinnerTray = diet.slice();

const dinnerTrayTwo = [...diet]; // spread operator ...
// hvis man bare sagde [diet], så kommer det i en array i en array, men når man bruger en spread operator så er det kun værdierne kommer i arrayet.

console.log(dinnerTrayTwo);


// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

for (let i = 1; i < lettersExpanded.length; i = i + 2){
    console.log(lettersExpanded[i]);
}

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 6 || numbers[i] < 0){
        console.log(numbers[i]);
    }
    else{
        discardedNumbers.push(numbers[i]);
    }
}

console.log(discardedNumbers);


// --------------------------------------



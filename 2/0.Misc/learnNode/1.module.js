
const sum = (num1, num2) => num1 + num2;
const PI = 3.14;

class SomeMathObject {
    constructor(age){
        console.log("object created");
        this.age = age;
    }

    name = "Ali";
    age;

    subtration = function(num1, num2){
        return num1 + num2;
    };

    sub = (n1, n2) => n1 + n2;

    hello = () => console.log("Hello world");

}

//Gør variablerne tilgængelig for andre
/*
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;
*/

module.exports = {sum : sum, PI : PI, SomeMathObject : SomeMathObject};
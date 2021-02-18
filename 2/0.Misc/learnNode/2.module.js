let name = "Ali";
const hello = function(){
    console.log("Hello world");
};
const sum = (num1, num2) => num1 + num2;

/*
module.exports.sum = sum;
module.exports.hello = hello;
module.exports.name = name;
*/

module.export = {sum : sum, hello : hello, name : name};
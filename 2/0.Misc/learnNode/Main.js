// Henter andre filer til denne fil
//1.module
const tutorial = require('./1.module');
console.log(tutorial.sum(2,3));
console.log(tutorial.PI);
const obj = new tutorial.SomeMathObject(10);
console.log(obj.hello());
console.log(obj.age + " : " + obj.name + " : " + obj.subtration(2, 3));




//2.module


console.log(user.hello());
console.log(user.sum(3,4));


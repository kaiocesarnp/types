"use strict";
let x = 10;
x = 12;
console.log(x);
let y = 12;
let z = 12;
let firstName = "Kaio";
let age = 27;
const isAdmin = true;
console.log(typeof firstName);
firstName = "João";
console.log(firstName);
console.log(firstName.toUpperCase());
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
console.log(myTuple);
const user = {
    name: "Pedro",
    age: 18,
};
console.log(user);
console.log(user.name);
let id = "10";
id = 200;
const userId = 10;
const productId = "00001";
const shirId = 123;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};
console.log(camisa);
let teste;
teste = "autenticado";
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Matheus"));
function greeting(name, greet) {
    if (greet) {
        console.log(`Óla ${greet} ${name}`);
        return;
    }
    console.log(`Óla ${name}`);
}
greeting("José");
greeting("Pedro", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10,
};
console.log(multiplyNumbers(someNumbers));

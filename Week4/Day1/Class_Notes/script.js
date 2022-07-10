// Exercise 1:
// 1. Greet the user with his name, the user's name is a parameter. Do this exercise,
// * first by using function declarations
// * then function expression,
// * then arrow function

function greet(name) {
    console.log(`Hello, ${name}`);
}
greet("John");

const greetTwo = function (name) {
	console.log(`Hello, ${name}`);
}
greetTwo("Ella")

const greetThree = name => console.log(`Hello, ${name}`);
greetThree("Alice")

// Exercise 2: Function & Arrow function & Ternary Operator
// 1. Check if the user's age is higher than 18. Use ternary operator.
// - if the user's age is higher than 18, return "You can drive"
// - else, return "You cannot drive"
// Do this exercise,
// * first by using function declarations
// * then function expression,
// * then arrow function

function ageCheckOne(age) {
    if (age > 18) {
		alert("You can drive");
	} else {
		alert("You cannot drive");
	}
}
ageCheckOne(25);

function ageCheckTwo (age) {
	let message = age > 18 ? "You can drive" : "You cannot drive";
	alert(message);
}
ageCheckTwo(25);

const ageCheckThree = (age) => age > 18 ? alert("You can drive") : alert("You cannot drive");
ageCheckThree(25)
// Exercise1
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
// let sumFn = (a,b) => a+b;
// sumFn(5,11);

// Exercise2
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// 1. First, use function declaration and invoke it.
// function weightDec(kilo) {
//     console.log(kilo*1000);
// }
// weightDec(3);
// 2. Then, use function expression and invoke it.
// let weightExp = function(kilo) {
//     console.log(kilo*1000);
// }
// weightExp(3);
// 3. Write in a one line comment, the difference between function declaration and function expression.
// function declaration we can invoke from everywhere, while function expression - not
// 4. Finally, use a one line arrow function and invoke it.
// let weightArrow = (kilo) => console.log(kilo*1000);
// weightArrow(3);

// Exercise3
// 1. Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// 2. The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
// let body = document.getElementsByTagName("body")[0];
// ((childrenNumber, partnerName, location, jobTitle) => {
//     let text = document.createTextNode(`You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${childrenNumber} kids.`);
//     body.appendChild(text);
// })(3, "Valeriya", "Moscow", "Software developer")

// Exercise4
// John has just signed in to your website and you want to welcome him.
// 1. Create a Bootstrap Navbar in your HTML file.
// 2. In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// 3. The function should add a div in the nabvar, displaying the name of the user and his profile picture.
// let span = document.getElementsByClassName("navbar-text")[0];
// ((username) => {
//     let text = document.createTextNode(username);
//     span.appendChild(text);
// })("Yosi Mikhelashvili")

// Exercise5

// Part I:

// 1. The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// 2. The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// 3. Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// Part II:

// 1. In the makeJuice function, create an empty array named ingredients.
// 2. The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
// 3. Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.
// 4. The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

// const makeJuice = beverageSize => {
//     const addIngredients = (ingOne, ingTwo, ingThree) => {
//         let text = document.createTextNode(`The client wants a ${beverageSize} juice, containing ${ingOne}, ${ingTwo} and ${ingThree}.`);
//         document.body.appendChild(text);
//     }
//     addIngredients("banana", "milk", "honey");
// }
// makeJuice("large");

// const makeJuice = beverageSize => {
//     let ingredients = [];
//     const addIngredients = (ingOne, ingTwo, ingThree) => {
//         ingredients.push(ingOne);
//         ingredients.push(ingTwo);
//         ingredients.push(ingThree);
//     }
//     addIngredients("banana", "milk", "honey");
//     addIngredients("blueberry", "chocolate", "strawberry");
//     let displayJuice = () => {
//         let text = document.createTextNode(`The client wants a ${beverageSize} juice, containing `);
//         document.body.appendChild(text);
//         ingredients.forEach((element) => {
//             let text = document.createTextNode(`${element}, `);
//             document.body.appendChild(text);
//         }
//         )
//     }
//     displayJuice();
// }
// makeJuice("large");
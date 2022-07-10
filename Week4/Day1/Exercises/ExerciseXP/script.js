// Exercise1
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.
// #1
// Prediction: 3
// Result: 3
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
// // run in the console:
// q1()

//#2
// Prediction: 0;5;0
// Result: 0;5;undefined
// var a = 0;
// function q2() {
//     a = 5;
// }
// function q22() {
//     alert(a);
// }
// run in the console:
// q22()
// q2()
// q22()

//#3
// Prediction: undefined;hello
// Result: undefined;hello
// function q3() {
//     window.a = "hello";
// }
// function q32() {
//     alert(a);
// }
// run in the console:
// q3()
// q32()

//#4
// Prediction: test
// Result: test
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }
// run in the console:
// q4()

//#5
// Prediction: 5;5
// Result: 5;5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);

// Exercise2
// function winBattle(){
//     return true;
// }
// 1. Transform the winBattle() function to an arrow function.
// const winBattle = () => true;
// 2. Create a variable called experiencePoints.
// let experiencePoints;
// 3. Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// winBattle() == true ? experiencePoints = 10 : experiencePoints = 1;
// 4. Console.log the experiencePoints variable.
// console.log(experiencePoints);

// Exercise3
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output
// const valueCheck = (value) => typeof(value) == "string" ? alert(true) : alert(false);
// valueCheck("hello");

// Exercise4
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// 1. Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// colors.forEach(
//     function(element,index) {
//         console.log(`${index+1}# choice is ${element}`);
//     }
// )
// 2. Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.
// let colorOne = colors.some((element) => element == "Violet")
// if (colorOne == 1) {
//     console.log("Yeah");
// }

// Exercise5
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.
// color.forEach(
//         function(element,index) {
//             if (index>2) {
//                 console.log(`${index+1}${ordinal[0]} choice is ${element}`);
//             } else {
//                 console.log(`${index+1}${ordinal[index+1]} choice is ${element}`);
//             }
            
//         }
//     )
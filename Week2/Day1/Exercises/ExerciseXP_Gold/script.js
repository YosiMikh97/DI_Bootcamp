//Exercise1
let sentence = ["my","favorite","color","is","blue"];
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.
let sentenceString = sentence.toString();
console.log(sentenceString);

//Exercise2
// 1. Create 2 variables. The values should be strings.
let fruitOne = "banana";
let fruitTwo = "apple";
// 2. Slice out and swap the first 2 characters of the two strings from part 1.
let sum = fruitOne.slice(0,2) + fruitTwo.slice(0,2);
console.log(sum);
// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
let concFruits = fruitOne + " " + fruitTwo;
// 4. Finally console.log the new concatenated string.
console.log(concFruits);

//Exercise3
// Make a Calculator. Follow the instructions:
// 1. Prompt the user for the first number.
let num1 = Number(prompt("First number"));
console.log(num1);
// 2. Store the first number in a variable called num1. Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
console.log(typeof(num1));
// 3. Prompt the user for the second number.
let num2 = Number(prompt("Second number"));
// 4. Store the second number in a variable called num2.
// 5. Create an Alert where the value is the SUM of num1 and num2.
alert(num1 + num2);
// 6. BONUS: Make a program that can subtract, multiply, and also divide!

//Exercise1
// 1. Store your favorite food into a variable.
// 2. Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
// 3. Console.log I eat <favorite food> at every <favorite meal>
let favFood = "Pizza";
let favMeal = "Dinner";
console.log(`I eat ${favFood} at every ${favMeal}`);

//Exercise2 Part 1
// Using this array : let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// 1. Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
// 2. Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
// 3. Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);
let myWatchedSeriesSentence = `I've watched ${myWatchedSeries[0]}`;
console.log(myWatchedSeriesSentence);
let finalSentence = `I've watched ${myWatchedSeries.length} series: ${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`;
console.log(finalSentence);

//Exercise2 Part 2
// 1. Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// 2. Add, at the end of the array, the name of another series you watched.
// 3. Add, at the beginning of the array, the name of your favorite series.
// 4. Delete the series “black mirror”.
// 5. Console.log the third letter of the series “money heist”.
// 6. Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
let tbbtIndex = myWatchedSeries.indexOf("the big bang theory");
console.log(tbbtIndex);
myWatchedSeries[tbbtIndex] = "friends";
console.log(myWatchedSeries);
myWatchedSeries.push("suits");
console.log(myWatchedSeries);
myWatchedSeries.splice(0,1,"billions");
console.log(myWatchedSeries);
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);

//Exercise3
// 1. Store a celsius temperature into a variable.
// 2. Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
let celsiusTemp = 30;
let fahrenheitTemp = celsiusTemp / 5 * 9 + 32;
console.log(`${celsiusTemp}°C is ${fahrenheitTemp}°F`);

//Exercise4
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression

a = 2;

console.log(a+b) //second expression

// 1. What will be the outcome of a + b in the first expression ?
// Prediction: It will output 55, because 21 and 34 are numbers
// Actual: 55
// 2. What will be the outcome of a + b in the second expression ?
// Prediction: It will output 23, because 2 and 21 are numbers
// Actual: 23
// 3. What is the value of c?
// It has no any value, because we only declared this variable, but we didn't defined it
// 4. Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5');
// Prediction: It will output 75, bacause 3 and 4 are numbers (SUM: 7) and "5" is a string, so it will just add 5 to 7
// Actual: 75

//Exercise5
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
// What is the output of each of the expressions below?
typeof(15)
// Prediction: Number
// Actual: Number

typeof(5.5)
// Prediction: Number
// Actual: Number

typeof(NaN)
// Prediction: Not a Number has a type of Number
// Actual: Number

typeof("hello")
// Prediction: String, because of quotes
// Actual: String

typeof(true)
// Prediction: Boolean (true/false)
// Actual: Boolean

typeof(1 != 2)
// Prediction: Boolean, because 1 is not equal to 2 (true)
// Actual: Boolean

`hamburgers`
// Prediction: String 
// Actual: String

"hamburgers" - "s"
// Prediction: "-" can only be used for numbers, so it will show NaN
// Actual: NaN

`13`
// Prediction: "13", because it's a string
// Actual: "13"

"1" - "3"
// Prediction: it can predict that there are numbers, so -2
// Actual:

"johnny" + 5
// Prediction: johnny5, because Johnny is string and 5 is number
// Actual:

"johnny" - 5
// Prediction: "-" can only be used for numbers, so it will show NaN 
// Actual: NaN

99 * "hello"
// Prediction: "*" can only be used for numbers, so it will show NaN 
// Actual: NaN

1 != 1
// Prediction: False, because 1 is equal to 1
// Actual: False

1 == "1"
// Prediction: True, because "==" doesn't consider type of value
// Actual: True

1 === "1"
// Prediction: False, because "===" does consider type of value
// Actual: False

//Exercise6
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

5 + "34"
// Prediction: 534, because "34" is a string, so it will be added to 5
// Actual: 534

5 - "4"
// Prediction: 1, because it will predict that "4" is a number
// Actual: 1

10 % 5
// Prediction: 0, because 10-5*2=0
// Actual: 0

5 % 10
// Prediction: 5, because 10-5=5
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction: "  "
// Actual: "  "

" " + 0
// Prediction: " 0"
// Actual: " 0"

true + true
// Prediction: 2, because true=1
// Actual: 2

true + false
// Prediction: 1, because false=0
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: False
// Actual: False

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN
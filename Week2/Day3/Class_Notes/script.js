//Exercise1
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
for (let i = 0; i<=15; i++) {
    if (i%2 ===0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

//Exercise2
// Change in the array, the fruit to plural, use this array
let fruits = ["apple", "banana", "pear", "melon"];
// the result should be
// let fruits = ["apples", "bananas", "pears", "melons"];
for (let i = 0; i < fruits.length; i++) {
    fruits[i] = fruits[i]+"s";
}
console.log(fruits);
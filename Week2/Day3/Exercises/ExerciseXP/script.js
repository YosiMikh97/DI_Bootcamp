// //Exercise1
// // Part1
// let people = ["Greg", "Mary", "Devon", "James"];

// // Write code to remove “Greg” from the people array.
// people.shift();
// // Write code to replace “James” to “Jason”.
// people.splice(2,1,"Jason");
// // Write code to add your name to the end of the people array.
// people.push("Yosi");
// // Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// console.log(people.indexOf("Mary"));
// // Write code to make a copy of the people array using the slice method.
// // The copy should NOT include “Mary” or your name.
// // Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// // Hint: Check out the documentation for the slice method
// let newPeople = people.slice(1,people.length);
// console.log(newPeople);
// // Write code that gives the index of “Foo”. Why does it return -1 ?
// console.log(people.indexOf("Foo"));
// // Create a variable called last which value is the last element of the array.
// // Hint: What is the relationship between the index of the last element in the array and the length of the array?
// let last = people[people.length-1];
// console.log(last);

// // Part2
// // Using a loop, iterate through the people array and console.log each person.
// for (let i of people) {
//     console.log(i);
// }
// // Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// for (let i = 0; i < people.length; i++) {
//     if (i==people.indexOf("Jason")+1) {
//         break;
//     }
//     console.log(people[i]);
// }
// // Hint: take a look at the break statement in the lesson.

// //Exercise2
// // Create an array called colors where the value is a list of your five favorite colors.
// let colors = ["red", "black", "blue"];
// // Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// // Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// // Hint : create an array of suffixes to do the Bonus
// for (let i = 0; i < colors.length; i++) {
//     let j = i % 10;
//     let k = i % 100;
//     let suffix;
//     if (j==1 && k!=11) {
//         suffix = "st";
//     } else if (j==2 && k!=12) {
//         suffix = "nd";
//     } else if (j==3 && k!=13) {
//         suffix = "rd";
//     } else {
//         suffix = "th";
//     }
//         console.log(`My ${i+1}${suffix} choice is ${colors[i]}`);
// }

//Exercise3
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// let userNumber;
// do {
//     userNumber = Number(prompt("Give me your number"));
//     console.log(`Your number is ${userNumber}`);
// } while (userNumber<10);

//Exercise4
// 1. Copy and paste the above object to your Javascript file.
// let building = {
//     numberOfFloors : 4,
//     numberOfAptByFloor : {
//         firstFloor : 3,
//         secondFloor : 4,
//         thirdFloor : 9,
//         fourthFloor : 2,
//     },
//     nameOfTenants : ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan :  [4, 1000],
//         david : [1, 500],
//     },
// }
// 2. Console.log the number of floors in the building.
// console.log(building["numberOfFloors"]);
// 3. Console.log how many apartments are on the floors 1 and 3.
// console.log(building["numberOfAptByFloor"]["firstFloor"], building["numberOfAptByFloor"]["thirdFloor"]);
// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment. 
// console.log(building["nameOfTenants"][1],building["numberOfRoomsAndRent"]["dan"][0]);
// 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
// let sum = building["numberOfRoomsAndRent"]["sarah"][1] + building["numberOfRoomsAndRent"]["david"][1];
// if (sum > building["numberOfRoomsAndRent"]["dan"][1]) {
//     building["numberOfRoomsAndRent"]["dan"][1] = 1200;
//     console.log(building["numberOfRoomsAndRent"]["dan"][1]);
// } else {
//     console.log(building["numberOfRoomsAndRent"]["dan"][1]);
// }

//Exercise5
// 1. Create an object called family with a few key value pairs.
// let family = {
//     father : "John",
//     mother : "Lia",
//     son : "Alex",
// }
// 2. Using a for in loop, console.log the keys of the object.
// for (let father in family) {
//     console.log(father);
// }
// 3. Using a for in loop, console.log the values of the object.
// for (let father in family) {
//     console.log(family[father]);
// }

//Exercise6
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
for (let my in details) {
    console.log(my, details[my]);
}

//Exercise7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// 1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// 2. Console.log the name of their secret society. The output should be “ABJKPS”
let namesSort = names.sort();
let secret = "";
for (i=0; i<namesSort.length; i++) {
    secret = secret + namesSort[i][0];
}
console.log(secret);
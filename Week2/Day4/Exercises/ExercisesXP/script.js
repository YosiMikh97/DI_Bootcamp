//Exercise1
// Part I : function with no parameters
// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.
// function infoAboutMe() {
//     console.log("My name is Yosi");
// }
// infoAboutMe();
// Part II : function with three parameters
// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")
// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(`Your name is ${personName}, you are ${personAge} years old, your favourite color is ${personFavoriteColor}`);
// }
// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");

//Exercise2
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
// 1. Create a function named calculateTip() that takes no parameter.
// 2. Inside the function, ask John for the amount of the bill. 
// 3. Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.
// 4. Console.log the tip amount and the final bill (bill + tip).
// 5. Call the calculateTip() function.
// let tip;
// function calculateTip() {
//     let bill = Number(prompt("What is the bill amount?"));
//     if (bill<50) {
//         tip = bill*0.2;
//     } else if (bill>=50 && bill <200) {
//         tip = bill * 0.15;
//     } else {
//         tip = bill * 0.1;
//     }
//     console.log(tip, tip+bill);
// }
// calculateTip();

// Exercise3
// 1. Create a function call isDivisible() that takes no parameter.
// 2. In the function, loop through numbers 0 to 500.
// 3. Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.
// Bonus: Add a parameter divisor to the function.

// let sum = 0;
// function isDivisible(divisor) {
//     for (i=0; i<500; i=i+divisor) {
//         console.log(i);
//         sum += i;
//     }
//     console.log(sum);
// }
// isDivisible(23);

// //Exercise4

// 1. Add the stock and prices objects to your js file.
// 2. Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// 3. Create a function called myBill() that takes no parameters. 
// 4. The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// 5. Call the myBill() function.
// 6. Bonus: If the item is in stock, decrease the item’s stock by 1

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// let shoppingList = ["banana", "orange", "apple"];
// let sum = 0;
// function myBill() {
//     for (let i = 0; i<shoppingList.length; i++) {
//         let a = shoppingList[i];
//         if (stock[a] && stock[a]>0) {
//             stock[a] -= 1;
//             sum += prices[a];
//         } else {
//             sum += 0;
//         }
//     }
//     console.log(sum);
// }
// myBill();

//Exercise5
// 1. Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
// 2. In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
// 3. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01
// 4. To illustrate:
// After you created the function, invoke it like this:
// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// function changeEnough(itemPrice, amountOfChange) {
//     let sum = 0.25 * amountOfChange[0] + 0.1 * amountOfChange[1]+ 0.05 * amountOfChange[2] + 0.01 *amountOfChange[3];
//     if (sum>=itemPrice) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// changeEnough(4.25, [25, 20, 5, 0]);

//Exercise6
// Let’s create functions that calculate your vacation’s costs:
// 1. Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel. 
let hotelPrice = 140;
function x() {
    userNumber = prompt("How many nights would you like to stay in the hotel?");
    return userNumber;
};
function hotelCost() {
    do {
        x();
    }
    while (
        isNaN(userNumber) || userNumber==""
        );
    return userNumber*hotelPrice;
}
// hotelCost();

// 2. Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$ 
function y() {
    userDest = prompt("What is your destination?").toLowerCase();
    return userDest;
};
function planeRideCost() {
    do {
        y();
    }
    while (
        (userDest)>-1 || userDest==""
    )
    if (userDest == "london") {
        return "183";
    } else if (userDest == "paris"){
        return "220";
    } else {
        return "300";
    }
}
// planeRideCost();
// 
// 3. Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental. 
let rentPrice = 40;
let finalPrice;
function z() {
    userNumberRent = prompt("For how many days would you like to rent the car?");
    return userNumberRent;
};
function rentalCarCost() {
    do {
        z();
    }
    while (
        isNaN(userNumberRent) || userNumberRent==""
        );
    finalPrice = userNumberRent*rentPrice;
    if (userNumberRent>10) {
        return finalPrice *0.95;
    } else {
        return finalPrice;
    }
}
// rentalCarCost();

// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z. 
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
function totalVacationCost() {
    console.log(`The car cost: $${rentalCarCost()}, the hotel cost: $${hotelCost()}, the plane tickets cost: $${planeRideCost()}`);
}
// 5. Call the function totalVacationCost()
totalVacationCost();
// 6. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

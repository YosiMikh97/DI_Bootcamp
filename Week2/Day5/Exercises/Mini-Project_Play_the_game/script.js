// First Part

// 1. Create a JS file and link it to the index.html file.
// 2. Take a look at your html file, you should have a button with an “onclick” event. This event is equal to the function playTheGame(). It means that when you will click on the button, the function playTheGame() will be called. 
// We will learn more about events next week ;)
// 3. In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).
// a. If the answer is false, alert “No problem, Goodbye”.
// b. If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :
// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.

// Second Part

// 1. Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber
// 2. The point of this function is to check if the userNumber is the same as the computerNumber:
// a. If userNumber is equal to computerNumber, alert “WINNER” and stop the game.
// b. If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).
// c. If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).
// d. If the user guessed more than 3 times, alert “out of chances” and exit the function.

function askUserNumber() {
    userNumber = prompt("What is your number from 0 to 10?");
    console.log("userNumber is: "+userNumber);
    numberCheck();
    askComputerNumber();
}
function numberCheck () {
    if (isNaN(userNumber) || userNumber=="") {
        alert("Sorry Not a number, Try again");
        return askUserNumber();
    } else if (userNumber<1 || userNumber>99) {
        alert("Sorry it’s not a good number, Try again");
        return askUserNumber();
    } else {
        return userNumber;
    }
}
function askComputerNumber () {
    computerNumber = Math.floor(Math.random() * 11);
    return computerNumber;
}
let attempt = 0;
function execFunction() {
    while (attempt<3) {
        attempt += 1;
        askUserNumber();
        compareNumbers(userNumber, computerNumber);
        if (attempt == 3) {
            alert("Out of chances");
        }
    }
}
function playTheGame() {
    let ret = confirm("Do you want to play the game?");
    if (ret == false) {
        alert("No problem, Goodbye");
    } else {
        execFunction();
    }
}
for (let i=0; i<3; i++) {
    function compareNumbers(userNumber,computerNumber) {
        console.log(userNumber, computerNumber);
        if (userNumber == computerNumber) {
            alert("WINNER");
            return true;
        } else if (userNumber>computerNumber) {
            alert("Your number is bigger than the computer’s, guess again");
            return false;
        } else if (userNumber<computerNumber) {
            alert("Your number is smaller then the computer’s, guess again");
            return false;
        }
    }
}
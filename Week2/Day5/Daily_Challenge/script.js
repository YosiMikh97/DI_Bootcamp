// Prompt the user for a number to begin counting down bottles.
// In the song, everytime a bottle drops, 
// the subtracted number should go up by 1. 

// For example,
// We start the song at 99 bottles
// -> Take _1_ down, pass it around
// -> we have now 98 bottles

// -> then, Take _2_ down, pass them around
// -> we have now 96 bottles

// -> then, Take _3_ down, pass them around
// -> we have now 93 bottles

// ... ect

// The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.
// Note : Make sure you get the grammar correct.
// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.

function askUserNumber() {
    userNumber = prompt("What is your number from 1 to 99?");
    console.log("userNumber is: "+userNumber);
    numberCheck();
}
askUserNumber();
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
let stock = userNumber;
for (let i = 1; i<=stock; i++) {
    stock -= i;
    if (i==1) {
        console.log(`Take ${i} down, pass it around`);
    } else if (i>=stock) {
        console.log(`Take ${i} down, pass them around`);
    } else {
        console.log(`Take ${i} down, pass them around`);
    };
    if (stock == 1) {
        console.log(`we have now ${stock} bottle`);
    } else {
        console.log(`we have now ${stock} bottles`);
    };
}
if (stock>0) {
    console.log(`Take ${stock} down, pass them around`);
    console.log(`0 bottle of beer on the wall`);
}

let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8,
		pear : 0.2
	}
};
// 1. Add the lastname Smith to the object
userCart["lastName"] = "Smith";
// 2. Change the price of the pear, so it will contain the Taxes. (17%)
userCart.prices.pear = userCart.prices.pear*1.17;
userCart.prices.pear *= 1.17;
// 3. Ask the user for the fruit he wants between Apple, Banana and Pear.
// Make sure that your code accept all type of strings,
// for example "Banana" or "banana" or "BaNaNA"
// let favFruit = prompt("Apple, Banana or Pear?").toLowerCase();
// console.log(favFruit);
// 4. Console.log the price for the specific fruit the user wants
// console.log(userCart["prices"][favFruit]);

//Exercise1
// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:
// Using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

// let minAge = Number(prompt("What is your age?"));
// if (minAge < 18) {
    // console.log("Sorry, you are too young to drive this car. Powering off");
// } else if (minAge == 18) {
    // console.log("Congratulations on your first year of driving. Enjoy the ride!");
// } else {
    // console.log("Powering On. Enjoy the ride!");
// }

//Exercise2
let userCartLog = {
	username : "Johnny",
	password: 12345,
	isUserSignedIn : true,
};
// PART I
// 1. If the user is SignedIn - show him his name and password
// 2. If not - alert the user "you need to sign in"
if (userCartLog["isUserSignedIn"] == true) {
    console.log(userCartLog["username"], userCartLog["password"]);
} else {
    alert("you need to sign in");
}
// PART II
// 1. If the user is Johnny AND his password is 12345 - alert him "You are signed in"
// 2. If the user is Johnny OR his password is 1234 - alert him "One credential is false"
// 3. Else,alert the user "you need to sign in
if (userCartLog["username"] == "Johnny" && userCartLog["password"] == 12345) {
    alert("You are signed in");
} else if (userCartLog["username"] == "Johnny" || userCartLog["password"] == 1234) {
    alert("One credential is false");
} else {
    alert("You need to sign in");
}


let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference
// 1. Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method. 
// 2. Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// No, user will be John, because we did change after user was defined and we didn't redefine user
// In the function, create a variable named shopping that is a copy of the groceries object. (Tip : make the shopping variable equal to the groceries variable)
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Yes, beacause shopping refers to the same object
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
// Yes, beacause shopping refers to the same object
// 3. Invoke the cloneGroceries function.
const displayGroceries = () => groceries.fruits.forEach((element) => console.log(element))
displayGroceries()
const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    console.log(user);
    let shopping = groceries;
    groceries.totalPrice = "35$";
    groceries.other.payed = false;
}
cloneGroceries()
// Exercise # ANONYMOUS FUNCTIONS
// 1. Add in your html file a div with an id of container
// let div = document.getElementById("container");
// 2. Create a self invoking function that takes one parameter the name of the user
// 3. When invoked, the function adds the name of the user in a sentence in the div
// DO IT first with a function expression, then with an arrow function
// (function(username) {
//     let text1 = document.createTextNode(`${username} is a human`);
//     div.appendChild(text1);
// })("Artem");
// (username => {
//     let text2 = document.createTextNode(`${username} tozhe`);
//     div.appendChild(text2);
// })("David")

// Exercise # Nested functions
// 1. Create a function named `starWars` that takes no parameter.
// 2. The function should declare a variable `characters` equal to an empty array
// 3. In the `startWars` function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"
// and push it to the `characters` array.
// 4. In the `startWars` function, create a function named `displayCharacter` should display in the body the fullname of the characters,
// 5. Call the `createCharacter` function a few times inside the starWars function
// and call the `displayCharacter` function once
// Second Part
// 6. Change the `starWars` function, to take one parameter, the name of the
// spaceship the characters are in
// 7. The `displayCharacter` function should now display in the body the fullname and spaceship
// of the characters
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens?
const starWars = spaceship => {
    let characters = [];
    let createCharacter = (firstName, lastName="Smith") => {
        characters.push(firstName + " " + lastName);
    }
    
    let displayCharacter = () => {
        characters.forEach((element) => {
                let text = document.createTextNode(element + " is in the spaceship " + spaceship);
                let br = document.createElement("br");
                document.body.appendChild(text);
                document.body.appendChild(br);
            }
        )
    }
    createCharacter("John", "Smith")
    createCharacter("Liam", "Solomon")
    displayCharacter()
}
starWars("The Devastator")
starWars("Republic Attack Cruiser")
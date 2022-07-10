const gameInfo = [
    {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
    },
    {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
    },
    {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
    },
    {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
    },
];
// 1. Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
let newGameInfo = [];
gameInfo.forEach(
    function(element, index) {
        newGameInfo.push(element.username + "!");
    }
)
console.log(newGameInfo);

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5. Use the ternary operator
let newArray = [];
gameInfo.forEach((element,index) => element.score > 5 ? newArray.push(element.username) : newArray.push())
console.log(newArray);

// 3. Find and display the total score of the users. (Hint: The total score is 71)
let total = 0;
gameInfo.forEach(
    function (element,index) {
    total += element.score;
}
)
console.log(total);
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.
// Follow these steps :
// 1. Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
let btn = document.getElementById("lib-button");
btn.addEventListener("click", function(){
    console.log("click is working");
}
)
// let inp = document.getElementsByTagName("input");
// for (let i=0; i<inp.length; i++) {
//     inp[i].addEventListener("input",function(event){
//         console.log(event.target.value);
//     });
// }
// 2. Make sure the values are not empty
// 3. Write a story that uses each of the values.
// 4. Make sure you check the console for errors when playing the game.
// 5. Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

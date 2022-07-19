// # Promises
// # EXERCISE 1
// Create a function that takes in a single parameter
// and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either
// resolve or reject.
// If the input is a string, the promise resolves with that same string
// uppercased.
// If the input is anything but a string it rejects with that same input.
// Use `then` to repeat the string twice
// use `catch` to console.log the error
// finally call a function that console.log ("congratulation")
// const checkParam = function (input) {
//     const checkInput = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof input === "string") {
//                 resolve(input.toUpperCase())
//             } else {
//                 reject(`error ${input}`)
//             }
//         }, 5000)
//     })
//     return checkInput;
// }

// checkParam("hello")
// .then(res => console.log(res+res))
// .catch(error => console.log(error))

// # Fetch
// # Exercise : use fetch
// # PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then
// append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
let body = document.getElementsByTagName("body")[0];
// fetch("https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
// .then(res => {
//     return res.json();
// })
// .then(objSun => {
//     let img = document.createElement("img");
//     img.setAttribute("src", objSun.data.images.original.url);
//     body.appendChild(img);
// })
// # Part II
// Instead of having a fixed category of gif.
// First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// You will then fetch 1 random gif, depending on the word. The word will be the gif category
// Display the word and the gif on the page
// For example:
// you will fetch the random-word-api. This api will return a random word - for example : "happy"
// Using this word as a category, you will fetch one random gif with the category of "happy"
// and display it on the page

// # Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"
fetch("http://random-word-api.herokuapp.com/word?number=1")
.then(res => {
    return res.json();
})
.then(objWord => {
    displayGif(objWord)
})

const displayGif = (objWord) => {
    console.log(objWord[0]);
    fetch(`https://api.giphy.com/v1/gifs/random?tag=%22${objWord[0]}%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then(res => {
        return res.json()   
    })
    .then(objGif => {
        console.log(objGif.data.length);
        if (objGif.data.length === 0){
            throw new Error ("404 ERROR")
        } else {
            let img = document.createElement("img");
            img.setAttribute("src", objGif.data.images.original.url);
            body.appendChild(img); 
        }
    })
    .catch(error => console.log(error))
}
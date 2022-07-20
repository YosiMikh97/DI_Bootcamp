// Daily_Challenge1
// 1. Create two functions. Each function should return a promise.
// 2. The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// 3. The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
const makeAllCaps = (array) => {
    const promise = new Promise((resolve, reject) => {
        if (array.every(checkType)) {
            resolve(array.forEach((elem) => elem.toUpperCase()));
        } else {
            reject("Bad array");
        }
    })
    return promise;
}
makeAllCaps(["hello", "world", "sun", "bus"])
.then(res => console.log(res))
.catch(error => console.log(error))

function checkType (word) {
    return typeof word === "string";
}

const sortWords = (array) => {
    const promise = new Promise((resolve, reject) => {
        if (array.length > 4) {
            resolve(array.sort((a,b) => a - b));
        } else {
            reject("Bad array");
        }
    })
    return promise;
}
sortWords(["HELLO", "WORLD", "SUN", "BUS", "PHONE"])
.then(res => console.log(res))
.catch(error => console.log(error))

// Daily_Challenge2

let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`
// 1. Create three functions. The two first functions should return a promise..
// 2. The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)
let morseJS = {};
const toJs = (data) => {
    const promise = new Promise((resolve,reject) => {
        let obj = JSON.parse(data);
        if (obj.length>0) {
            resolve(obj);
        } else {
            reject("ERROR");
        }
    })
    return promise;
}
toJs(morse)
.then(res => morseJS = res)
.catch(error => console.log(error))
console.log(morseJS);
// 3. The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

let userText = prompt("I need a text from you");
const textCheck = (userText) => userText.forEach((elem) => elem === morseJS)
const userTextToArray = (userText) => {
    newArray = [];
    let userArray = userText.split("");
    newArray = userArray;
    return newArray;
}
const arrayTranslation = (userTextToArray) => {
    let userMorse = [];
    for (let i=0; i<userTextToArray.length; i++) {
        userMorse.push(morseJS.userTextToArray[i]);
    }
    return userMorse;
}
const toMorse = (morseJS) => {
    if (textCheck) {
        resolve(arrayTranslation);
    } else {
        reject("ERROR");
    }
}
toMorse(morseJS)
.then(res => console.log(res))
.catch(error => console.log(error))

// 4. The third function called joinWords(morseTranslation), takes one argument: the morse translation array
// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
// 5. Chain the three functions.
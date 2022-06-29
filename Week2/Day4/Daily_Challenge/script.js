// 1. Prompt the user for several words (separated by commas).
// 2. Put the words into an array.
// 3. Console.log the words one per line, in a rectangular frame as seen below.
// 4. Check out the Hints and Requirements below.
// For example, if the user gives you: 
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
let userWords = prompt("Text me some words please!");
userWords = userWords.split(",");
let maxLength = 0;
for (let i = 0; i < userWords.length; i++) {
    let x = userWords[i];
    if (x.length>maxLength) {
        maxLength = x.length;
    } else {
        maxLength += 0;
    }
}
console.log(maxLength);
for (z = "*"; z.length<maxLength+4; z = z + "*"){
}
console.log(z);
for (j=0;j<userWords.length; j++){
    c = " ";
    multi = maxLength-userWords[j].length;
    rest = c.repeat(multi);
    console.log("* "+userWords[j]+rest+" *");
}
console.log(z);
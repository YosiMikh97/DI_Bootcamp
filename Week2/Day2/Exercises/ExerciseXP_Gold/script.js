//Exercise1
// Hint: Use Switch Case
// 1. Ask the user which language they speak.
// 2. Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”
// 3. Create a few conditions :
// If the user speaks French : display “Bonjour”
// If the user speaks English : display “Hello”
// If the user speaks Hebrew : display “Shalom”
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
let userLanguage = prompt("What language do you speak?").toLowerCase();
switch(userLanguage) {
    case "french":
        console.log("Bonjour");
        break;
    case "english":
        console.log("Hello");
        break;
    case "hebrew":
        console.log("Shalom");
        break;
    default:
        console.log("01110011 01101111 01110010 01110010 01111001");
}

//Exercise2
// Ask the user for their grade.
// If the grade is bigger than 90, console.log “A”
// If the grade is between 80 and 90 (included), console.log “B”
// If the grade is between 70(included) and 80 (included), console.log “C”
// If the grade is lower than 70, console.log “D”
let userGrade = Number(prompt("What is your grade?"));
if (userGrade>90) {
    console.log("A");
} else if (userGrade<=90 && userGrade>80) {
    console.log("B");
} else if (userGrade<=80 && userGrade>=70) {
    console.log("C");
} else {
    console.log("D");
}

//Exercise3
// Prompt the user for a string. It must be a verb.
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.
let userString = prompt("What is your favourite verb?");
let userStringLength = userString.length;
if (userStringLength>=3 && userString.slice(userStringLength-3,userStringLength)!="ing") {
    console.log(userString+"ing");
} else if (userStringLength>=3 && userString.slice(userStringLength-3,userStringLength)=="ing") {
    console.log(userString+"ly");
} else {
    console.log(userString);
}
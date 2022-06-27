// 1. Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
let sentence = "I am not a bad person."
// For example, “The movie is not that bad, I like it”.
// 2. Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let sentenceArray = sentence.split(" ");
let wordNot = sentenceArray.indexOf("not");
console.log(wordNot);
// // 3. Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad = sentenceArray.indexOf("bad");
console.log(wordBad);
// // 4. If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// // For example, the result here should be : “The movie is good, I like it”
// // 5. If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
if (wordBad>wordNot) {
    sentenceArray.splice(2, 3, "good");
    console.log(sentenceArray.join(" "));
} else {
    console.log(sentence);
}

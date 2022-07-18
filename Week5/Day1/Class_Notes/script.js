// Exercise # JSON
// # Exercise with JSON
// 1. Parse this JSON string into a JS object
// 2. Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// 3. Create another variable to stringify the JS object. Console.log the variable
// 4. Then use pretty print (look at the lesson)
let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`
// let toJson = JSON.parse(jsonString);
// console.log(toJson);
// let x = toJson.quiz.sport.q1.options;
// console.log(x);
// for (let i=0; i<x.length; i++) {
//     console.log(x[i]);
// }
// let toString = JSON.stringify(toJson, null, 2);
// console.log(toString);

// # Exceptions
// ## Exercise 1
// Write a function called `divide` that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.
// However, if denominator is zero you should throw the error, "Attempted to divide by zero."
const divide = (numerator, denominator) => {
    let result;
    try {
		if (denominator !== 0) {
			result = numerator/denominator;
		} else {
			throw new RangeError("Attempted to divide by zero.")
		}
	} catch (error) {
		console.log(error.message)
	} finally {
		console.log(result)
	}
}
divide(6,3);
divide(6,0)
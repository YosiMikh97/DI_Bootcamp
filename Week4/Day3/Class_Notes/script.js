// Exercise1
let famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
        age: 100
    }
]
// 1. Using the array above, use the map method, to create a new array that contains only the name of the actors
const actorName = famousPeople.map((element) => element.name)
console.log(actorName);
// 2. Use the map method, to create a new array, that contains objects, each object contains the name of the actor, and it's job
const newArr = famousPeople.map((element) => {
    let obj = {
        name: element.name,
        job: element.job
    }
    return obj;
}
)
console.log(newArr);

// 3. BONUS: Using the array you get from question2, use the for each method, to add the names and the job of the actors on the DOM (in a paragraph, appended to a div with an id "container")

// Filter
// Exercise 1:  create a new array that filters only the positive value
let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
let filterPositive = numbers.filter((elem) => elem>0)
console.log(filterPositive);

// Exercise 2: Suppose you have a list of Star Trek characters, and you want to get just the characters that appeared in Star Trek: The Next Generation.
// Use filter() to filter the array of characters below
const characters = [
    { name: 'James T. Kirk', series: ['Star Trek'] },
    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
]; 

let starFilter = characters.filter((elem) => elem.series.includes('Star Trek: The Next Generation'))
let final = starFilter.map((elem) => elem.name)
console.log(final);

// Exercise 3 NOT MANDATORY - send me the result by slack
let colors = ["blue", "red", "red", "blue", "yellow"]
// Use the filter method to create an array without duplicates. The result should be
["blue","red","yellow"]

// Reduce
// Exercise 1
const students = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55},
    {name: 'John', score: 75}
];
// Find the sum of the score of the students using reduce
let sum = students.reduce((acc, elem) => acc + elem.score, 0)
console.log(sum);

// Exercise 2
// Turn an array of voter objects into a count of how many people voted
let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];
let count = voters.reduce((acc, elem) => acc + elem.voted, 0)
console.log(count);
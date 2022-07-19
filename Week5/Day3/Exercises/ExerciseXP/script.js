// Exercise1
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.
// const compareToTen = function(num) {
//     const promise = new Promise((resolve, reject) => {
//         if (num<10) {
//             resolve(`Super number ${num}`);
//         } else {
//             reject(`Bad number ${num}`);
//         }
//     })
//     return promise;
// }
// compareToTen(3)
// .then(res => console.log(res))
// .catch(error => console.log(error))

// Exercise2
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.
// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("success");
//     },4000);
// });
// promiseTwo
// .then(res => console.log(res))
// .catch(error => console.log("Ooops something went wrong"))

// const promiseThree = Promise.resolve("success").then(res => console.log(res))

// Exercise3
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const promiseFour = Promise.resolve(3).then(res => console.log(res))
const promiseFive = Promise.reject("Boo!").catch(error => console.log(error))

// Daily_Challenge1
// Implement a simple version of Promise.all. 
// This function should accept an array of promises and return an array of resolved values. 
// If any of the promises are rejected, the function should catch them.
// Promise.all([
//     new Promise((resolve,reject) => resolve(1)),
//     new Promise((resolve,reject) => reject(new Error("rejection"))),
//     new Promise((resolve,reject) => resolve(3))
// ]).then(res => console.log(res))
// .catch(err => console.log(err))

// Promise.all([
//     Promise.resolve(3),
//     42,
//     new Promise((resolve, reject) => {
//         setTimeout(resolve, 3000, 'foo')
// })
// ]).then(res => console.log(res))
// .catch(err => console.log(err))

// Daily_Challenge2
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.
// 1. In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city
// 2. Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()

// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242

const myFun = async(lat,lng) => {
    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`);
    let data = await response.json();
    console.log(data.results.sunrise);
}
myFun()

let latitudeParis = document.getElementById("latitudeFirst");
let longitudeParis = document.getElementById("longitudeFirst");
let latitudeNewYork = document.getElementById("latitudeSecond");
let longitudeNewYork = document.getElementById("longitudeSecond");
let btn = document.getElementById("button");
btn.addEventListener("click", getData);
function getData(elem) {
    elem.preventDefault();
    let obj = {};
    obj[latitudeParis.name] = latitudeParis.value;
    obj[longitudeParis.name] = longitudeParis.value;
    obj[latitudeNewYork.name] = latitudeNewYork.value;
    obj[longitudeNewYork.name] = longitudeNewYork.value;
    myFun(obj.latitudeFirst,obj.longitudeFirst);
    myFun(obj.latitudeSecond,obj.longitudeSecond);
}


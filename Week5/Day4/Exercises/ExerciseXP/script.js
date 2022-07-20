// Exercise1
// Convert the below promise into async await:
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));
// const myFun = async() => {
//     const response = await fetch("https://www.swapi.tech/api/starships/9/");
//     let data = await response.json();
//     console.log(data.result.properties);
// }
// myFun()

// Exercise2
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Analyse the code provided above before executing it - what will be the outcome?
// 1. We call acyncCall()
// 2. console.log("calling");
// 3. resolveAfter2Seconds() (2sec)
// 4. console.log result of resolveAfter2Seconds()

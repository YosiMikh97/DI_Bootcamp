// Exercise
// # Async Await
// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user -
// if the names are not a string -> reject
// else - resolve with the name of the 2 ppl
const firstFun = async(nameOne, nameTwo) => {
    if (typeof nameOne !== "string" || typeof nameTwo !== "string") {
        throw new Error("ERROR");
    } else {
        const arr = [nameOne, nameTwo];
        return arr;
    }
}
// 2. The 2nd function, receives a noun
// if the noun is less than 3 letters - reject
// else - resolve with the noun
const secondFun = async(noun) => {
    if (noun.length < 3) {
        throw new Error("ERROR");
    } else {
        return noun;
    }
}
// 3. The 3rd function, receives a city
// if the city doesn't start with an uppercase letter -> reject
// else - resolve with the city name
const thirdFun = async(city) => {
    if (city[0] !== city[0].toUpperCase()) {
        throw new Error("ERROR");
    } else {
        return city;
    }
}
// 4. The 4st function, receives a verb (finishing with "ing")
//  if it doesn't end with "ing" -> reject (use the endWith string method)
// else resolve with the verb
const fourthFun = async(verb) => {
    if (!verb.endsWith("ing")) {
        throw new Error("ERROR");
    } else {
        return verb;
    }
}
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"
// ---
const fifthFun = async() => {
    try {
        let names = await firstFun("David", "Artem");
        let noun = await secondFun("football");
        let city = await thirdFun("Moscow");
        let verb = await fourthFun("playing");
        return `${names[0]} is ${verb} ${noun} with ${names[1]} in ${city}`;
    } catch(error) {
        console.log(error.message);
    }
    
}
fifthFun()
.then(res => console.log(res))
// 6. Part II. BONUS
// Instead of waiting for the promises to come back resolved, look at Promise.all method
// --> running the promises in Parallel
// --> check the difference of performance with performance.now()

// Exercise
// Look at the solution of the project above. Rewrite it to use async await.
// Create 3 functions :  fetchWord(), fetchGif(word) and appendGifToBody(gifUrl)
async function fetchWord () {
	try {
        let promise = await fetch('http://random-word-api.herokuapp.com/word?number=1')
        let response = await promise.json()
        .then(result => {
            let [word] = result;
            fetchGif(word)
        })
    } catch(error) {
        console.log("IN THE CATCH", error) //catch an error if there is
    }
}

function fetchGif (wordrandom) {
	fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordrandom}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`) // return a promise with as a result a Response object
	.then(response => {
		if (response.status !== 200){
			throw new Error ("404 ERROR")	
		} else {
			return response.json(); //returns a promise
		}
	})
	.then(result => {
		console.log(result)
		if (result["data"] == []){
			throw new Error ("GIF NOT FOUND");
		} else {
			let gif = result["data"]["images"]["original"]["url"];
			let imageGif =  document.createElement("img");
			imageGif.setAttribute("src", gif);
			document.body.appendChild(imageGif)
		}
		
	})
	.catch(error => {
		let imageGif = document.createElement("img");
		imageGif.setAttribute("src", "https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif");
		document.body.appendChild(imageGif)
		console.log("IN THE CATCH", error)
	})
}

fetchWord()
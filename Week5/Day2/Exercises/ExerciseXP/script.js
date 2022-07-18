// Exercise1
// Create a program to retrieve the data from the API URL provided above. Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.
// let btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("click", requestData);

// let req = new XMLHttpRequest();

// function requestData () {
// 	req.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
// 	req.responseType = 'json'; 
// 	req.send();
// }

// req.onload = function() {
// 	document.body.style.backgroundColor = "white";
// 	if (req.status != 200) {
//         console.log("error status")
// 		displayError(req)
// 	} else {
// 		console.log("Finished Loading")
// 		displayUser(req.response) 
// 	}
// };

// const displayUser = (obj) => {
// 	console.log(obj);
// }

// Exercise2
// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object
let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", requestData);

let req = new XMLHttpRequest();

function requestData () {
	req.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
	req.responseType = 'json'; 
	req.send();
}

req.onload = function() {
	document.body.style.backgroundColor = "white";
	if (req.status != 200) {
        console.log("error status")
		displayError(req)
	} else {
		console.log("Finished Loading")
		displayUser(req.response) 
	}
};

const displayUser = (obj) => {
	console.log(obj);
}
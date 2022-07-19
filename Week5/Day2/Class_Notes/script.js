// Exercise
// # AJAX
// - Make an HTTP request using the GET METHOD on this API:
// https://jsonplaceholder.typicode.com/users
// - Use the method onload, onprogress, onerror
// - If there is no error, display on the page the name, email, city of the 3 first users
let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", requestData);

let req = new XMLHttpRequest();

function requestData () {
	req.open('GET', 'https://jsonplaceholder.typicode.com/users');
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
		console.log(req.response)
		displayUser(req.response) 
	}
};

req.onprogress = function(event) {
	console.log("progress", req)
	document.body.style.backgroundColor = "red";
};

req.onerror = function(event) {
	console.log("error", req);
    displayError(req)
};

const displayUser = (robots) => {
	let results = document.getElementById("results")
    for (let i = 0; i<3; i++) {
        let li = document.createElement("li");
		li.textContent = `${robots[i].name} - ${robots[i].email} - ${robots.address.city}`;
		results.appendChild(li);
    }
	// robots.forEach(info => {
	// 	let li = document.createElement("li");
	// 	li.textContent = `${info.name} - ${info.email} - ${info.address.city}`;
	// 	results.appendChild(li);
	// });

}

const displayError = (req) => {
	console.log("in display error")
	let error = document.getElementById("error");
	let h2 = document.createElement("h2");
	h2.textContent = `Error : ${req.status}`
	h2.style.backgroundColor = 'pink';
	error.appendChild(h2);
}
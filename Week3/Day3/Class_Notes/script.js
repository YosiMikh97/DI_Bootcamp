// let colors = ["blue", "yellow", "green", "pink"];
// 1. Add inside the HTML file a div of id "container" (do it directly in the HTML)
// 2. Add one button per color inside the div container (do it directly in the JS)
// 3. Each button should have an "click" event listener that changes the background color of the document, to the color of the button (do it directly in the JS)
// let div = document.getElementById("container");
// function addButton() {
//     for (let i=0; i<colors.length; i++) {
//         let button = document.createElement("button");
//         button.textContent = colors[i];
//         div.appendChild(button);
//         button.addEventListener("click", changeBackground);
//     }
// }
// addButton();

// function changeBackground(ev) {
//     let colorBtn = ev.target.textContent;
//     document.body.style.backgroundColor = colorBtn;
// }

//Exercise2

// 1. Using this array, create a button on the page that when clicked on 
// display  3 animals, but the order of the picture should be random
// 2. Set a class to the image, so each image will be 200px height, and width, and in the middle of the page
// 3. Add a button next to each image
// 4. When we click on one image, it should disapear(ie. be deleted),
// When we hover on the image, it should display the "alt".

// let pics = [
// 	"https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// 	"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// 	"https://images.pexels.com/photos/3439576/pexels-photo-3439576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
// ];

//1. retrieve the button
// let btnImage = document.getElementById("btnimg"); //getting button
// let div = document.getElementById("container"); //getting div

// btnImage.addEventListener("click", addImages) //adding click event to the button

// function addImages(){ //adding images
// 	for (let i = 0; i<pics.length; i++) {
// 		let newimg = document.createElement("img"); //creating img element
// 		newimg.classList.add("img-small") //adding class from css
// 		newimg.setAttribute("src", pics[i]); //adding attribute src to img

// 		//create a deletebutton
// 		let btndelete =  document.createElement("button"); // creating a delete button
// 		let textbtn = document.createTextNode(`delete pic ${i+1}`) //creating a text in button
// 		btndelete.appendChild(textbtn) //appending text to button
// 		btndelete.addEventListener("click", deleteImg) //creating a click event to delete button

// 		div.appendChild(btndelete) //append delete button to div
// 		div.appendChild(newimg); //append img to div
// 	}
// }


// function deleteImg(ev){ 
// 	// console.log(ev.target) //button we clicked
// 	// console.log(ev.target.nextElementSibling) //image that is a next sibling of the button
// 	let imgsibling = ev.target.nextElementSibling; //accessing to the delete button
// 	imgsibling.remove() //deleting img
// }


// setTimeout(function() {
// 	let div = document.createElement("div");
// 	let text = document.createTextNode("The sales end in 10min !");
// 	div.appendChild(text);
// 	let body = document.getElementsByTagName("body")[0];
// 	body.appendChild(div);
// 	div.style.backgroundColor = "red";
// },
// 5000)


let counter = 11;
let stopCounter;
function counterTen() {
	stopCounter = setInterval(counterFunction,1000)
}
function counterFunction() {
	if (counter==0) {
		clearInterval(stopCounter);
	} else {
		counter--;
		let div = document.createElement("div");
		let text = document.createTextNode(`The sales end in ${counter}min !`);
		div.appendChild(text);
		let body = document.getElementsByTagName("body")[0];
		body.appendChild(div);
		div.style.backgroundColor = "red";
	}
}
counterTen();

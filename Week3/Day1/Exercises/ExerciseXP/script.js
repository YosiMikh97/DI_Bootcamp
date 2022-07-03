// //Exercise1

// // 1. Add the code above, to your HTML file
// // 2. Using Javascript:
// // Retrieve the div and console.log it
// // let x = document.getElementById('container');
// // console.log(x);
// // Change the name “Pete” to “Richard”.
// // let y = document.getElementsByClassName('list');
// let a = document.querySelector('.list li');
// console.log(a);
// let b = a.nextElementSibling;
// b.innerText = "Richard";
// console.log(b);
// // Change each first name of the two <ul>'s to your name.
// let c = document.querySelector('.list');
// console.log(c);
// let d = c.firstElementChild;
// d.innerText = "Yosi";
// console.log(d);
// // let e = document.nextElementSibling(c);
// let f = c.nextElementSibling.firstElementChild;
// f.innerText = "Yosi";
// console.log(f);
// // Delete the <li> that contains the text node “Sarah”.
// let e = c.nextElementSibling.firstElementChild.nextElementSibling.remove();
// let g = c.nextElementSibling.firstElementChild.nextElementSibling;
// console.log((g));
// // 3. Bonus - Using Javascript:
// // Add a class called student_list to both of the <ul>'s.
// let j = document.getElementsByTagName('ul');
// j[0].classList.add("student_list");
// j[1].classList.add("student_list");
// console.log(j);
// // Add the classes university and attendance to the first <ul>.
// j[0].classList.add("university", "attendance");
// console.log(j);

//Exercise2

// 1. Add the code above, to your HTML file 
// 2. Add a “light blue” background color and some padding to the <div>.
// let div = document.getElementsByTagName("div")[0].style.backgroundColor = "lightblue";
// console.log(div);
// 3. Do not display the <li> that contains the text node “John”.
// let liJohn = document.getElementsByTagName("ul")[0].firstElementChild.style.display = "none?";
// 4. Add a border to the <li> that contains the text node “Pete”.
// let liPete = document.getElementsByTagName("ul")[0].lastElementChild.style.border = "1px solid grey";
// 5. Change the font size of the whole body.
// let body = document.getElementsByTagName("body")[0].style.fontSize = "30px";
// 6. Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
// let aaa = document.getElementsByTagName("div")[0];
// if (aaa.style.backgroundColor === "lightblue") {
//     alert(`Hello ${document.getElementsByTagName("li")[0].innerText} and ${document.getElementsByTagName("li")[1].innerText}`);
// }

//Exercise3

// 1. Add the code above, to your HTML file
// 2. In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// let div = document.getElementsByTagName("div")[0];
// div.setAttribute("id","socialNetworkNavigation");
// 3. We are going to add a new <li> to the <ul>.
// a. First, create a new <li> tag (use the createElement method).
// b. Create a new text node with “Logout” as its specified text.
// c. Append the text node to the newly created list node (<li>).
// d. Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// let li = document.createElement("li");
// document.getElementsByTagName("ul")[0].appendChild(li);
// li.textContent = "Logout";
// 4. Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
// let first = document.getElementsByTagName("ul")[0].firstElementChild.textContent;
// let last = document.getElementsByTagName("ul")[0].lastElementChild.textContent;
// console.log(first,last);

//Exercise4

// Take a look at this link for help.
// The point of this challenge is to display a list of two books on your browser.
// 1. In the body of the HTML page, create an empty div: 
// <div class="listBooks"></div>
// 2. In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
// let div = document.getElementsByClassName("listBooks")[0];
// let table = document.createElement("table");
// div.appendChild(table);
// let tableBody = document.createElement("tbody");
// table.appendChild(tableBody);
// for (let i=0; i<2; i++) {
//     let tableRow = document.createElement("tr");
//     tableBody.appendChild(tableRow);
//     for (let j=0; j<2; j++) {
//         let tableColumn = document.createElement("td");
//         tableRow.appendChild(tableColumn);
//     }
// }
// let img1 = document.createElement("img");
// tableBody.lastElementChild.firstElementChild.appendChild(img1);
// img1.src="https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg";
// let img2 = document.createElement("img");
// tableBody.lastElementChild.lastElementChild.appendChild(img2);
// img2.src="https://images-na.ssl-images-amazon.com/images/I/91BHmR8HASL.jpg";
// let allBooks = [
//     {
//         title: "HarryPotter",
//         author: "J.K.Roaling",
//         image: img1,
//         alreadyRead: true
//     },
//     {
//         title: "Master and Margarita",
//         author: "Mikhail Bulgakov",
//         image: img2,
//         alreadyRead: true
//     },
// ]
// console.log(allBooks);
// 3. Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// 4. Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.
// tableBody.firstElementChild.firstElementChild.innerHTML = `${allBooks[0].title} written by ${allBooks[0].author}`;
// tableBody.firstElementChild.lastElementChild.innerHTML = `${allBooks[1].title} written by ${allBooks[1].author}`;
// img1.style.width = "100px";
// img2.style.width = "100px";
// for (let k=0; k<2; k++) {
//     allBooks[k].alreadyRead = a;
//     if (a==true) {
//         allBooks[k].style.color = "red";
//     }
// }
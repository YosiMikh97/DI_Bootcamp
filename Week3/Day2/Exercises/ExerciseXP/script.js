//Exercise1

// 1. Using a DOM property, retrieve the h1 and console.log it.
// let h1 = document.getElementsByTagName("h1")[0];
// console.log(h1);
// 2. Using DOM methods, remove the last paragraph in the <article> tag.
// let article = document.getElementsByTagName("article")[0];
// article.lastElementChild.remove();
// 3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// let h2 = document.getElementsByTagName("h2")[0];
// h2.addEventListener("click", function(){
//     h2.style.backgroundColor = "red";
// }
// )
// 4. Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// let h3 = document.getElementsByTagName("h3")[0];
// h3.addEventListener("click", function(){
//     h3.style.display = "none";
// }
// )
// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// let button = document.createElement("button");
// article.appendChild(button);
// let p = document.getElementsByTagName("p");
// button.addEventListener("click", function(){
//     for (let i=0; i<p.length; i++) {
//         p[i].style.fontWeight = "bold";
//     }
// }
// )
// 6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// let random = Math.floor(Math.random() * 101)
// h1.addEventListener("mouseover", function(){
//     h1.style.fontSize = `${random}px`;
//     console.log(random);
// }
// )
// 7. BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

//Exercise3

// 1. Declare a global variable named allBoldItems.
let allBoldItems;
// 2. Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
let bold = document.getElementsByTagName("strong");
function getBold_items() {
    // for (let i=0; i<bold.length; i++) {
        allBoldItems = bold;
    // }
}
// 3. Create a function called highlight() that changes the color of all the bold text to blue. 

// 4. Create a function called return_normal() that changes the color of all the bold text back to black. 

// 5. Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
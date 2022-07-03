

// Exercise 1: Traversing the DOM
// Knowing how to traverse the DOM using JavaScript provides a foundation
// to altering an HTML page in real time.
// Using the HTML markup in Listing 1, perform these tasks:
// 1. Use the firstElementChild / firstChild property to access an element.
let x = document.getElementById('header');
console.log(x.firstElementChild);
console.log(x.firstChild);
// 2. Use the lastElementChild / lastChild  property to access an element.
let y = document.getElementById('content');
// console.log(y.lastElementChild);
// console.log(y.lastChild);
// // 3. Use the nextElementSibling / nextSibling  property to access an element.
// console.log(y.firstElementChild.nextElementSibling);
// console.log(y.firstElementChild.nextSibling);
// // 4. Use the previousElementSibling / previousSibling  property to access an element.
// console.log(y.lastElementChild.previousElementSibling);
// console.log(y.lastElementChild.previousSibling);
// // 5. Use the parentNode property to access an element.
// console.log(y.parentNode);
// // 6. Use the childNodes property to access a group of child elements.
// console.log(y.childNodes);

// Exercise 2: Targeting nodes 
// In exercise 1, you learned how to target nodes in several ways.
// Continuing to use the markup in Listing 1, perform the following tasks:
// 1. Retrieve the value of a node using nodeValue / innerText / innerHTML.
console.log(y.innerHTML);
console.log(y.innerText);
console.log(y.nodeValue);
// 2. Change the value of a node using nodeValue / innerText / innerHTML.
let a = document.replaceChild();
// 3. Retrieve the value of a node attribute.
// 4. Change the value of a node attribute.

// Exercise 3: Manipulating the DOM
// Now that you know how to traverse the DOM and alter node values,
// the next logical step is to learn how to add, remove, and replace nodes.
// Perform the following tasks:
// 1. Use the appendChild method to add a node.
// 2. Use the insertBefore method to add a node.
// 3. Use the removeChild method to remove a node.
// 4. Use the replaceChild method to replace a node.
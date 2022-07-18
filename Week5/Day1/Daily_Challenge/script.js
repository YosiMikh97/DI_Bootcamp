// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, send the data as JSON.
let form = document.forms.form;
let btn = document.getElementById("button");
btn.addEventListener("click", getData);
function getData(elem) {
    elem.preventDefault();
    let inputOne = document.getElementById("inputname");
    let inputTwo = document.getElementById("inputlastname");
    let obj = {};
    obj[inputOne.name] = inputOne.value;
    obj[inputTwo.name] = inputTwo.value;
    console.log(JSON.stringify(obj));
}
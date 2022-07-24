let container = document.getElementsByClassName("container")[0];
let btn = document.getElementById("button");
btn.addEventListener("click",retrieveCharacter);

const createLoader = () => {
    let loader = document.createElement("i");
    loader.classList.add("fa-solid");
    loader.classList.add("fa-spinner");
    loader.classList.add("fa-spin-pulse");
    let loaderdiv = document.createElement("div");
    loaderdiv.classList.add("loaderdiv");
    loaderdiv.appendChild(loader);
    container.appendChild(loaderdiv);
}
const removeLoader = () => {
    let loaderdiv = document.getElementsByClassName("loaderdiv")[0];
    loaderdiv.style.display = "none";
}



const numberCreation = () => {
    let number = Math.floor(Math.random() * 83) + 1
    return number;
}

const createURL = () => {
    return `https://www.swapi.tech/api/people/${numberCreation()}`; 
}
async function getRestData(link) {
    let response = await fetch(link);
    let result = await response.json();
    let final = await result;
    if (response.status !== 200) {
        throw new Error("Smth went wrong");
    } else {
        return final;
    }
}
async function getHomeWorld(link) {
    let homeworld = await getRestData(link);
    let final = await homeworld;
    return final;
}

async function getData() {
    let response = await fetch(createURL());
    let result = await response.json();
    let final = await result;
    let obj = {};
    obj.name = final["result"]["properties"]["name"];
    obj.height = final["result"]["properties"]["height"];
    obj.gender = final["result"]["properties"]["gender"];
    obj.birthyear = final["result"]["properties"]["birth_year"];
    let smth = await getHomeWorld(final["result"]["properties"]["homeworld"]);
    obj.homeworld = smth["result"]["properties"]["name"];
    if (response.status !== 200) {
        throw new Error("Smth went wrong");
    } else {
        return obj;
    }
}

getData()
.then(res => res
)

async function createBody() {
    let obj = await getData();
    let container = document.getElementById("container");
    let main = document.createElement("div");
    main.classList.add("main");
    container.appendChild(main);
    let name = document.createElement("div");
    name.classList.add("title");
    let nameText = document.createTextNode(obj.name);
    name.appendChild(nameText);
    main.appendChild(name);
    let height = document.createElement("div");
    height.classList.add("text");
    let heightText = document.createTextNode(`Height: ${obj.height}`);
    height.appendChild(heightText);
    main.appendChild(height);
    let gender = document.createElement("div");
    gender.classList.add("text");
    let genderText = document.createTextNode(`Gender: ${obj.gender}`);
    gender.appendChild(genderText);
    main.appendChild(gender);
    let birth_year = document.createElement("div");
    birth_year.classList.add("text");
    let birth_yearText = document.createTextNode(`Birth Year: ${obj.birth_year}`);
    birth_year.appendChild(birth_yearText);
    main.appendChild(birth_year);
    let homeworld = document.createElement("div");
    homeworld.classList.add("text");
    let homeworldText = document.createTextNode(`Home World: ${obj.homeworld}`);
    homeworld.appendChild(homeworldText);
    main.appendChild(homeworld);
}

async function retrieveCharacter() {
    // createLoader();
    createBody();
}
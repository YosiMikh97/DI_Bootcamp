const robots = [
    {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
    },
    {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
    },
    {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
    },
    {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
    },
    {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
    },
    {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
    },
    {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
    },
    {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
    },
    {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
    },
    {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
    }
];

let main = document.getElementsByClassName("main")[0];
robots.forEach((elem) => {
    let div = document.createElement("div");
    div.classList.add("character");
    main.appendChild(div);
    div.setAttribute("id",elem.id);
    let imgdiv = document.createElement("div");
    imgdiv.classList.add("imgdiv");
    let img = document.createElement("img");
    img.classList.add("img");
    img.setAttribute("src",elem.image);
    div.appendChild(imgdiv);
    imgdiv.appendChild(img);
    let pname = document.createElement("p");
    pname.classList.add("pname");
    let name = document.createTextNode(elem.name);
    pname.appendChild(name);
    div.appendChild(pname);
    let pmail = document.createElement("p");
    pmail.classList.add("pmail");
    let mail = document.createTextNode(elem.email);
    pmail.appendChild(mail);
    div.appendChild(pmail);
}
)

let input = document.getElementById("search");
input.addEventListener("keyup",fun)
function fun() {
    let newRobots = [];
    newRobots.push(robots.filter(elem => elem.name.toLowerCase().includes(input.value.toLowerCase()) || elem.email.toLowerCase().includes(input.value.toLowerCase())));
    for (let i = 0; i<robots.length; i++) {
        let a = robots[i];
        let divOld = document.getElementById(`${robots[i].id}`);
        if (newRobots[0].includes(a) == false) { 
            divOld.style.display = "none";
        } else {
            divOld.style.display = "block";
        }
    }
    return newRobots;
}



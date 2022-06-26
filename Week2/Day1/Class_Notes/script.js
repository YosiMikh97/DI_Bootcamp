//Exercise1

let addressNumber; //declaration
addressNumber = 32; //definition
let addressStreet;
addressStreet = "Sayanskaya";
let country;
country = "Russia";
let globalAddress;
globalAddress = `${addressNumber} ${addressStreet} ${country}`;
console.log (globalAddress);
console.log (globalAddress);
globalAddress = `I live in ${addressStreet} ${addressNumber}, in ${country}`;
console.log (globalAddress);

//Exercise2

const birthYear = 1997;
let futYear = 2023;
let dif = futYear - birthYear;
console.log(dif);
let statement = `I will be ${dif} in ${futYear}`
console.log(statement);
console.log(`I will be ${futYear-birthYear} in ${futYear}`);

//Exercise3

let pets = ['cat','dog','fish','rabbit','cow'];
let dogIndex = pets[1];
console.log(dogIndex);
pets.push('horse');
console.log(dogIndex);
console.log(pets);
console.log(pets.length);
pets.splice(pets[4]);
console.log(pets);
console.log(pets);
let pets2 = ['cat','dog','fish','rabbit','cow','horse'];
pets2.splice(3,1);
console.log(pets2);
console.log(pets.length);
console.log(pets2.length);
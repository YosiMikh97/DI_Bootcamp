
// Exercise3
// 1. Modify the code below, and destructure the object in the parameter (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)
const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
        amount: 2,
        value : "5Million"
    }
}

function getElonMuskDetails({first, last, housesLocation,}){
	console.log(firstname, lastname)
	console.log(locationOne, locationTwo, valueHouses)

}

getElonMuskDetails(elonPerson)
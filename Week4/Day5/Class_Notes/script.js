// Exercise # Currying
// Create a curried function, that returns the volume of an object
// the volume is calculated like this length * weight * height
// 1. Call the function twice, for products of length 10cm. Weight and Height can differ
// 2. Call the function twice, for products of length 10cm and weight 2 grams,  height can differ
const volume = (length) => (height) => (weight) => console.log(length * weight * height);
let volumeTwo = volume(10)(5);
volumeTwo(3);
volumeTwo(7);


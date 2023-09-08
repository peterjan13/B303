/*
    Create functions which can manipulate our arrays.
*/
/*
    
   1. Create a function called getCubedValues() which is able to receive an array of numbers and return a new array of the cubed values.
        - Use the forEach() method to print the square of each number on a new line.
*/

function displayValues(array) {
  let newArray = array.forEach(function (number) {
    console.log(number ** 3);
  });
  return newArray;
}

/*
2. Write a function called celsiusToFahrenheit that takes an array of Celsius temperatures as input returns an array of converted values to Fahrenheit.
    - Create a new variable inside the function called convertedArray.
    - Use the map() method to convert each temperature to Fahrenheit and save it into the variable. 
    - return the convertedArray variable.
*/
function celsiusToFahrenheit(celsiusTemperatures) {
  let convertedArray = [];
  convertedArray = celsiusTemperatures.map((celsius) => (celsius * 9) / 5 + 32);
  return convertedArray;
}

let celsiusTemperatures = [35, 37.5, 72, 100, 0];
let convertedToFahrenheit = celsiusToFahrenheit(celsiusTemperatures);
console.log(convertedToFahrenheit);

/*
3. Write a function called areAllEven that takes an array of numbers as input and returns a boolean which determines if all the numbers given are even or not.
    - Create a new variable inside the function called isEven.
    - Use the every() method to check if all the numbers are even and save the result into the variable. 
    - Return the isEven variable.

*/

function areAllEven(array) {
  let isEven = array.every(function (number) {
    return number % 2 == 0;
  });
  return isEven;
}

/*
4. Write a function called hasDivisibleBy8 that takes an array of numbers as input returns a boolean which determines if the array contains at least one number divisible by 8.
- Create a new variable called hasDivisible
- Use the some() method to check if at least one of the given values is divisible by 8, save the result in the hasDivisible variable.
- Return the hasDivisible variable.

*/

function hasDivisibleBy8(array) {
  let hasDivisible = array.some(function (number) {
    return number % 8 == 0;
  });
  return hasDivisible;
}

/*
5. Write a function called filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers from the original array.
    - Create a new variable called filteredNum
    - Use the filter() method to create a new array of only the even numbers from the original array save it in the filteredNum variable.
    - Return the filteredNum variable.

*/

function filterEvenNumbers(array){
	let filteredNum = array.filter(function(number){
		return number%2==0;
	});
	return filteredNum;
}

/*
6. Write a function called getProductNames which is able to receive an array of product objects and return a new array of only the name values of each product.
    - Create a new variable called productNames
    - Use the map() method to return only the product names of each product object into a new array which we can save in the productNames variable.
    - Return the productNames variable.

*/

function getProductNames(product) {
  let productNames = product.map(function(product){
  return product.name;
  });
  return productNames;
}


let productsArray = [
  {
    name: "Shampoo",
    price: 90,
  },
  {
    name: "Toothbrush",
    price: 50,
  },
  {
    name: "Soap",
    price: 25,
  },
  {
    name: "Toothpaste",
    price: 45,
  },
];

//Do not modify
//For exporting to test.js
try {
  module.exports = {
    getCubedValues:
      typeof getCubedValues !== "undefined" ? getCubedValues : null,
    areAllEven: typeof areAllEven !== "undefined" ? areAllEven : null,
    hasDivisibleBy8:
      typeof hasDivisibleBy8 !== "undefined" ? hasDivisibleBy8 : null,
    celsiusToFahrenheit:
      typeof celsiusToFahrenheit !== "undefined" ? celsiusToFahrenheit : null,
    filterEvenNumbers:
      typeof filterEvenNumbers !== "undefined" ? filterEvenNumbers : null,
    getProductNames:
      typeof getProductNames !== "undefined" ? getProductNames : null,
  };
} catch (err) {}

console.log("Mutator Methods");

// Iteration Methods

/* 
    - loops through all the elements to perform repetitive tasks on the array
*/

// forEach() - to loop through the array
// map() - loops through the array and returns a new array
// filter() - returns a new array containing elements which meets the given condition

// every() - it checks if all elements meet the given condition
// return true if all elements meet the given condition, however, false if its does not
let numbers = [1, 2, 3, 4, 5, 6];
let allValid = numbers.every(function (number) {
  return number > 3;
});

console.log("result of every() method: ");
console.log(allValid);

// some() - checks if atleast one element meets the given condition
// returns true if atleast one element meets the given condition, return false otherwies
let someValid = numbers.some(function (number) {
  return number < 2;
});

console.log("result of some() method: ");
console.log(someValid);

// includes() method - methods can be "chained" using then one after another
let products = ["Mouse", "keyboard", "Laptop", "Monitor"];
let filteredProducts = products.filter(function (product) {
  return product.toLowerCase().includes("a");
});

console.log(filteredProducts);

// reduce()
let iteration = 0;
let reduceArray = numbers.reduce(function (x, y) {
  console.log("current iteration: " + ++iteration);
  console.log("accumulator " + x);
  console.log("currentValue: " + y);

  return x + y;
});

console.log("result of reduce method: " + reduceArray);

let productsReduce = products.reduce(function (x, y) {
  return x + " " + y;
});

console.log("result of reduce() method: " + productsReduce);

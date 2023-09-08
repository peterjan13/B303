/*
	
	1. Create a function called addNum which will be able to add two numbers.
		- Numbers must be provided as arguments.
		- Return the result of the addition.
	   
	   Create a function called subNum which will be able to subtract two numbers.
	    - Numbers must be provided as arguments.
	    - Return the result of subtraction.

	    Create a new variable called sum.
	     - This sum variable should be able to receive and store the result of addNum function.

	    Create a new variable called difference.
	     - This difference variable should be able to receive and store the result of subNum function.

	    Log the value of sum variable in the console.
	    Log the value of difference variable in the console.

	2. Create a function called multiplyNum which will be able to multiply two numbers.
		- Numbers must be provided as arguments.
		- Return the result of the multiplication.

		Create a function divideNum which will be able to divide two numbers.
		- Numbers must be provided as arguments.
		- Return the result of the division.

		Create a new variable called product.
		 - This product variable should be able to receive and store the result of multiplyNum function.

		Create a new variable called quotient.
		 - This quotient variable should be able to receive and store the result of divideNum function.

		Log the value of product variable in the console.
		Log the value of quotient variable in the console.


	3. Create a function called getCircleArea which will be able to get total area of a circle from a provided radius.
		- a number should be provided as an argument.
		- look up the formula for calculating the area of a circle with a provided/given radius.
		- look up the use of the exponent operator.
		- return the result of the area calculation.

		Create a new variable called circleArea.
		- This variable should be able to receive and store the result of the circle area calculation.
		- Log the value of the circleArea variable in the console.

	4. Create a function called getAverage which will be able to get total average of four numbers.
		- 4 numbers should be provided as an argument.
		- look up the formula for calculating the average of numbers.
		- return the result of the average calculation.
		
		Create a new variable called averageVar.
		- This variable should be able to receive and store the result of the average calculation
		- Log the value of the averageVar variable in the console.
	

	5. Create a function called checkIfPassed which will be able to check if you passed by checking the percentage of your score against the passing percentage.
		- this function should take 2 numbers as an argument, your score and the total score.
		- First, get the percentage of your score against the total. You can look up the formula to get percentage.
		- Using a relational operator, check if your score percentage is greater than 75, the passing percentage. Save the value of the comparison in a variable called isPassed.
		- return the value of the variable isPassed.
		- This function should return a boolean.

		Create a global variable called outside of the function called isPassingScore.
			-This variable should be able to receive and store the boolean result of the checker function.
			-Log the value of the isPassingScore variable in the console.
*/

// 1.
// Function to add two numbers
function addNum(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subNum(a, b) {
  return a - b;
}

// Store the result of addNum function in the sum variable
let sum = addNum(5, 15);

// Store the result of subNum function in the difference variable
let difference = subNum(20, 5);

// Log the value of sum variable in the console
console.log("Sum of 5 and 15:", sum);

// Log the value of difference variable in the console
console.log("Difference of 20 and 5:", difference);

//   2.
// Function to multiply two numbers
function multiplyNum(a, b) {
  return a * b;
}

// Function to divide two numbers
function divideNum(a, b) {
  return a / b;
}

// Store the result of multiplyNum function in the product variable
let product = multiplyNum(50, 10);

// Store the result of divideNum function in the quotient variable
let quotient = divideNum(50, 10);

// Log the value of product variable in the console
console.log("The product of 50 and 10:", product);

// Log the value of quotient variable in the console
console.log("The quotient of 50 and 10:", quotient);

// 3.
// Function to calculate the area of a circle
function getCircleArea(radius) {
  let area = Math.PI * Math.pow(radius, 2);
  return area;
}

// Calculate the area of a circle with radius 15 and store the result in the circleArea variable
let circleArea = getCircleArea(15);

// Log the value of circleArea variable in the console
console.log(
  "The result of getting the area of a circle with 15 radius:",
  circleArea
);

// 4.
// Function to calculate the average of four numbers
function getAverage(num1, num2, num3, num4) {
  let sum = num1 + num2 + num3 + num4;
  let average = sum / 4;
  return average;
}

// Calculate the average of numbers 20, 40, 60, and 80 and store the result in the averageVar variable
let averageVar = getAverage(20, 40, 60, 80);

// Log the value of averageVar variable in the console
console.log("The average of 20, 40, 60 and 80:", averageVar);

//   5.
// Function to check if a score is passing
function checkIfPassed(score, totalScore) {
  let percentage = (score / totalScore) * 100;
  let isPassed = percentage > 75;
  return isPassed;
}

// Calculate if a score of 38 out of 50 is passing and store the result in the isPassingScore variable
let isPassingScore = checkIfPassed(38, 50);

// Log the value of isPassingScore variable in the console
console.log("Is 38/50 a passing score?:", isPassingScore);

//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try {
  module.exports = {
    addNum: typeof addNum !== "undefined" ? addNum : null,
    subNum: typeof subNum !== "undefined" ? subNum : null,
    multiplyNum: typeof multiplyNum !== "undefined" ? multiplyNum : null,
    divideNum: typeof divideNum !== "undefined" ? divideNum : null,
    getCircleArea: typeof getCircleArea !== "undefined" ? getCircleArea : null,
    getAverage: typeof getAverage !== "undefined" ? getAverage : null,
    checkIfPassed: typeof checkIfPassed !== "undefined" ? checkIfPassed : null,
  };
} catch (err) {}

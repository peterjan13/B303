console.log("ES6 Updates");

// Exponent Operator
const firstNum = 8 ** 2;
console.log(firstNum);

const secondNum = Math.pow(8, 2);
console.log(secondNum);

// Template Literals
/*
    - allows us to write strings w/o using concatenation
    - greatly helps us with code readablitity
*/

let name = "Ken";

// using concatenation
let message = "Hello " + name + "! Welcome to Programming";
console.log("Message without template literal: " + message);

// using template literals
// backticks (``) and ${} for including javascript expressions
message = `Hello ${name}! Welcome to Programming`;
console.log(`Message with template literals: ${message}`);

// creates multiline using template literals
const anotherMessage = `
${name} attended a Math Competition.
He won it by solving the problem 8 ** 2 with the answer of ${firstNum}`;
console.log(anotherMessage);

const interestRate = 0.1;
const principal = 1000;

console.log(
  `The interest on your savings amount is: ${principal * interestRate}`
);

// Array Destructuring
const fullName = ["Juan", "Dela", "Cruz"];

// using array indeces
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

console.log(
  `Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}! It's nice to meet you.`
);

// using array destructuring
/*
const firstName = (fullName[0]);
const middleName = (fullName[1]);
const lastName = (fullName[2]);
*/
const [firstName, middleName, lastName] = fullName;
console.log(
  `Hello ${firstName} ${middleName} ${lastName}! It's nice to meet you.`
);

//   Object Destructuring
const person = {
  givenName: "Jane",
  maidenName: "Dela",
  familyName: "Cruz",
};

// using dot notation
console.log(person.givenName);
console.log(person.maidenName);
console.log(person.familyName);

console.log(
  `Hello ${person.givenName} ${person.maidenName} ${person.familyName}! It's good to see you.`
);

// using object destructuring
const { givenName, familyName, maidenName } = person;

console.log(
  `Hello ${person.givenName} ${person.maidenName} ${person.familyName}! It's good to see you.`
);

function getFullName({ givenName, maidenName, familyName }) {
  console.log(`${givenName} ${maidenName} ${familyName}`);
}
getFullName(person);

// Arrow Functions
const hello = () => {
  console.log("Hello World!");
};
hello();

// Traditional Functions without Template Literals
/*
function printFullName(fName, mName, lName) {
  console.log(fName + " " + mName + " " + lName);
}
printFullName("John", "D", "Smith");
*/

// Arrow function with Template Literals
const printFullName = (fName, mName, lName) => {
  console.log(`${fName} ${mName} ${lName}`);
};
printFullName("Jane", "D", "Smith");

// Arrow Functions with Loops
const students = ["John", "Jane", "Judy"];

// Traditional Function
students.forEach(function (students) {
  console.log(`${students} is a student.`);
});

// Arrow Function
students.forEach((student) => {
  console.log(`${student} is a student.`);
});

// Implicit Return Statements

// Traditional Function
/*
function add (x, y){
    return x + y;
}
let total = add(2, 5);
console.log(total);
*/

// Arrow Function
// single line arrow functions
const add = (x, y) => x + y;

let total = add(2, 5);
console.log(total);

// Default Argument Values
// Provides a default argument
const greet = (name = "User") => {
  return `Good Afternoon ${name}`;
};
console.log(greet());
console.log(greet("Judy"));

// [SECTION] Class-based Object Blueprints

// Create a class
class Car {
  constructor(brand, name, year) {
    this.brand = brand;
    this.name = name;
    this.year = year;
  }
}

// Instantiate an object
const fordExplorer = new Car();

// Even though the 'fordExplorer' object is const, since it is an object, you may still re-assign values to its properties
fordExplorer.brand = "Ford";
fordExplorer.name = "Explorer";
fordExplorer.year = 2022;

console.log(fordExplorer);

const toyotaVios = new Car("Toyota", "Vios", 2018);
console.log(toyotaVios);

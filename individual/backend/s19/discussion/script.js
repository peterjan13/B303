// Javascript consists of whats called 'statements'. And statements are basically just syntax with semi-colons at the end.
// alert("Hello World!");

// Javscript can access the 'log' function of the console to display text/data in the console.
console.log("Hello World!");

// [SECTION] Variables

// Variable Declaration & Invocation
let my_variable = "Hola, Mundo!";
console.log(my_variable);

// Concatenating Strings
let country = "Philippines";
let province = "Metro Manila";

let full_address = province + ", " + country;

console.log(full_address);

// Numbers/Integers
let headcount = 26;
let grade = 98.7;

console.log(
  "The number of students is " +
    headcount +
    " and the average grade of all students is " +
    grade
);

// let sum = headcount + grade;

// console.log(sum);

// Boolean - The value of boolean is ONLY true or false. When naming variables that have a boolean value, make sure they're formatted like a question.
let is_married = false;
let is_good_conduct = true;

console.log("He's married: " + is_married);
console.log("She's a good person: " + is_good_conduct);

// Arrays - A set of data each labeled by an 'index'. The index of each item on an array always starts with 0.
let grades = [98.7, 89.9, 90.2, 94.6];
let details = ["John", "Smith", 32, true];

console.log(details);

// Objects - A set of data which consists of 'properties' that each have their own 'key' instead of an index.
let person = {
  fullName: "Juan Dela Cruz",
  age: 40,
  isMarried: false,
  contact: ["09992223313", "09448876691"],
  address: {
    houseNumber: "345",
    city: "England",
  },
};

// Javascript reads arrays as objects. This is mainly to accomodate for specific functionalities that arrays can do later on.
console.log(typeof person);
console.log(typeof grades);

// Null & Undefined - Usually thrown by javascript for debugging purposes OR used by developers to initialize a variable to be assigned a new value later on.
let girlfriend = null;
let full_name;

console.log(girlfriend);
console.log(full_name);

// [SECTION] Operators

// Arithmetic Operators - Mathematical operators that work the same way as they do in algebra.
let first_number = 5;
let second_number = 5;

let sum = first_number + second_number;
let difference = first_number - second_number;
let product = first_number * second_number;
let quotient = first_number / second_number;
let remainder = first_number % second_number; // '%' is called 'modulo'

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);

// Assignment Operators - Main example of this is the '=' symbol which is used to assign a value to a variable.
let assignment_number = 0; //initialize zero as the assignment number

assignment_number = assignment_number + 2;
console.log("Result of addition assignment operator: " + assignment_number);

// You can combine arithmetic and assignment operators to utilize the previous value of a variable and re-assign it.
assignment_number += 2;
console.log(
  "Result of shorthand addition assignment operator: " + assignment_number
);

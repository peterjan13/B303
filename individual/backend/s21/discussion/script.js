// Function Declaration & Invocation
function printName() {
  console.log("My name is Jeff");
}

printName();

// Function Expression
let variable_function = function () {
  console.log("Hello from function expression!");
};

variable_function();

// Scoping
let global_variable = "Call me mr. worldwide";

console.log(global_variable);

function showNames() {
  let function_variable = "Joe";
  const function_const = "John";

  console.log(function_variable);
  console.log(function_const);

  // You CAN use golbal variables inside any function as long as they are declared outside of the function scope.
  console.log(global_variable);
}

// You CANNOT use locally-scoped variables outside the function they are declared in.
// console.log(function_variable);

showNames();

// NESTED FUNCTIONS
function parentFunction() {
  let name = "Jane";

  function childFunction() {
    let nested_name = "John";

    console.log(name);

    // Accessing the 'nested_name' variable within the same function it was declared in, WILL work.
    console.log(nested_name);
  }
  childFunction();

  // console.log(nested_name);
}

parentFunction();

// childFunction();

// BEST PRACTICE FOR FUNCTION NAMING
function printWelcomeMessageForUser() {
  let first_name = prompt("Enter your first name: ");
  let last_name = prompt("Enter your last name: ");

  console.log("Hello, " + first_name + " " + last_name + "!");
  console.log("Welcome sa page ko!");
}

// printWelcomeMessageForUser();

// RETURN STATEMENT
function fullName() {
  return "Peterjan";
}
console.log(fullName());

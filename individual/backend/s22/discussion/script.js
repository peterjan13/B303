// ARGUMENTS AND PARAMETERS
function printName(name) {
  console.log("I'm the real " + name);
}

printName("Slim Shady");

function checkDivisibilityBy2(number) {
  let result = number % 2;

  console.log("The remainder of " + number + " is " + result);
}

checkDivisibilityBy2(15);

// MULTIPLE ARGUMENTS AND PARAMETERS
function createFullName(firstName, middleName, lastName) {
  console.log(firstName + " " + middleName + " " + lastName);
}

createFullName("Juan", "Dela", "Cruz");

// USAGE OF PROMPTS AND ALERTS
let user_name = prompt("Enter your username");

function displayWelcomeMessageForUser(userName) {
  alert("Welcome back to Valorant " + userName);
}

displayWelcomeMessageForUser(user_name);

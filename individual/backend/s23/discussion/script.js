// // [SECTION] If-else statements
let number = 1;
if (number > 1) {
  console.log("Number is greater than 1!");
} else if (number < 1) {
  console.log("Number is less than 1!");
} else {
  console.log("None of the conditions were true :(");
}

// [SECTION] Falsey values
if (false) {
  console.log("Falsey");
}
if (0) {
  console.log("Falsey");
}
if (undefined) {
  console.log("Falsey");
}

// Truthy values
if (true) {
  console.log("Truthy");
}
if (1) {
  console.log("Truthy");
}
if ([]) {
  console.log("Truthy");
}

// [SECTION] Ternary operators
let result = 1 < 10 ? true : false;

// If there are multiple lines within the if-else block, it's better to use the regular syntax as the ternary operatior is only capable of using one-liners.
if (5 == 5) {
  let greeting = "Hello";
  console.log(greeting);
}

console.log("Value returned from the ternary operator is " + result);

// [SECTION] Switch Statements
let day = prompt("What day of the week is it today?").toLowerCase();
switch (day) {
  case "monday":
    console.log("The day today is monday");
    break;
  case "tuesday":
    console.log("The day today is tuesday");
    break;
  case "wednesday":
    console.log("The day today is wednesday");
    break;
  case "thursday":
    console.log("The day today is thursday");
    break;
  case "friday":
    console.log("The day today is friday");
    break;
  default:
    console.log("Please input a valid day naman paareh");
    break;
}

// [SECTION] Try/Catch/Finally Statements
function showIntensityAlert(windSpeed) {
  try {
    alerat(determineTyphoonIntesity(windSpeed));
  } catch (error) {
    console.log(error.message);
  } finally {
    alert("Intensity updates will show new alert!");
  }
}

showIntensityAlert(56);

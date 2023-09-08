/*
    
    1. Create a function called login which is able to receive 3 parameters called username,password and role.
        -add an if statement to check if the the username is an empty string or undefined or if the password is an empty string or undefined or if the role is an empty string or undefined.
            -if it is, return a message in console to inform the user that their input should not be empty.
        -add an else statement. Inside the else statement add a switch to check the user's role add 3 cases and a default:
                -if the user's role is admin, return the following message:
                    "Welcome back to the class portal, admin!"
                -if the user's role is teacher,return the following message:
                    "Thank you for logging in, teacher!"
                -if the user's role is a rookie,return the following message:
                    "Welcome to the class portal, student!"
                -if the user's role does not fall under any of the cases, as a default, return a message:
                    "Role out of range."
*/
function login(username, password, role) {
  if (!username || !password || !role) {
    return "Inputs must not be empty";
  } else {
    switch (role) {
      case "admin":
        return "Welcome back to the class portal, admin!";
      case "teacher":
        return "Thank you for logging in, teacher!";
      case "rookie":
        return "Welcome to the class portal, student!";
      default:
        return "Role out of range.";
    }
  }
}

/*
    2. Create a function called checkAverage able to receive 4 numbers as arguments calculate its average and log a message for  the user about their letter equivalent in the console.
        -add parameters appropriate to describe the arguments.
        -create a new function scoped variable called average.
        -calculate the average of the 4 number inputs and store it in the variable average.
        -research the use of Math.round() and round off the value of the average variable.
            -update the average variable with the use of Math.round()
            -Do not use Math.floor()
            -console.log() the average variable to check if it is rounding off first.
*/

// MEMBER 3
function checkAverage(num1, num2, num3, num4) {
  // Calculate the average of the 4 numbers
  let average = (num1 + num2 + num3 + num4) / 4;

  // Round off the average value using Math.round()
  average = Math.round(average);

  // Log the rounded average value in the console
  // console.log("Rounded Average:", average);

    if (average <= 74){
     // console.log("Hello, student, your average is "+average+". The letter equivalent is F");
     return ("Hello, student, your average is "+average+". The letter equivalent is F");
    }
    else if (average >= 75 && average <= 79){
        // console.log("Hello, student, your average is "+average+". The letter equivalent is D");
     return ("Hello, student, your average is "+average+". The letter equivalent is D");
    }
    else if (average >= 80 && average <= 84){
        // console.log("Hello, student, your average is "+average+". The letter equivalent is C");
        return ("Hello, student, your average is "+average+". The letter equivalent is C");
    } 
    else if (average >= 85 && average <= 89){
        // console.log("Hello, student, your average is "+average+". The letter equivalent is B");
        return ("Hello, student, your average is "+average+". The letter equivalent is B");
    } 
    else if (average >= 90 && average <= 95){
        // console.log("Hello, student, your average is "+average+". The letter equivalent is A");
        return ("Hello, student, your average is "+average+". The letter equivalent is A");
    } 
    else if (average >= 96){
        // console.log("Hello, student, your average is "+average+". The letter equivalent is A+");
        return ("Hello, student, your average is "+average+". The letter equivalent is A+");
    }
}
// This is just a test to check if the function is working.
checkAverage(88, 50, 68, 71);

/*
        -add an if statement to check if the value of average is less than or equal to 74.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is F"
        -add an else if statement to check if the value of average is greater than or equal to 75 and if average is less than or equal to 79.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is D"
        -add an else if statement to check if the value of average is greater than or equal to 80 and if average is less than or equal to 84.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is C"
        -add an else if statement to check if the value of average is greater than or equal to 85 and if average is less than or equal to 89.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is B"
        -add an else if statement to check if the value of average is greater than or equal to 90 and if average is less than or equal to 95.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is A"
        -add an else if statement to check if the value of average is greater than 96.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is A+"

        Invoke and add a number as argument using the browser console.

    Note: strictly follow the instructed function names.
*/

//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try {
  module.exports = {
    login: typeof login !== "undefined" ? login : null,
    checkAverage: typeof checkAverage !== "undefined" ? checkAverage : null,
  };
} catch (err) {}

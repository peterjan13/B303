//Objective 1
//Add code here

let value = prompt("Provide a number");
console.log("The number you provided is " + value + ".");

//using for loop
for (let count = value; count >= 0; count--) {
  if (count <= 50) {
    console.log("The current value is at " + count + ". Terminating the loop.");
    break;
  }
  if (count % 10 == 0) {
    console.log("The number is divisible by 10. Skipping the number.");
    continue;
  }
  // Check if the current value is divisible by 5
  if (count % 5 == 0) {
    console.log(count);
  }
}
 

//Objective 2
let string = "supercalifragilisticexpialidocious";
console.log(string);
let filteredString = "";
for (let index = 0; index < string.length; index++){

  if(string[index].toLowerCase() == "a" || string[index].toLowerCase() == "e" | string[index].toLowerCase() == "i"|| string[index].toLowerCase() == "o" || string[index].toLowerCase() == "u") {
    continue;
    } else {
    filteredString += string[index]; 
    }
} 
console.log(filteredString);

//Add code here

//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        filteredString: typeof filteredString !== 'undefined' ? filteredString : null

    }
} catch(err){

}


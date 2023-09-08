//[SECTION] While Loop
// let count = 5;

// while (count !== 0) {
//   console.log("Current value of count: " + count);
//   count--;
// }

// [SECTION] Do-while Loop
// let number = Number(prompt("Give me a number"));

// do {
//   console.log("Current value of number: " + number);
//   number += 1;
// } while (number < 10);

// [SECTION] For Loop
// for (let count = 0; count <= 20; count++) {
//   console.log("Current for loop value: " + count);
// }

// let my_string = "earl";

// To get length of a string
// console.log(my_string.length);

// To get a specific letter in a string
// console.log(my_string[0]);

// Loops through each letter in the string and will keep iterating as long as the current index is less than the length of the string.
// for (let index = 0; index < my_string.length; index++) {
//   console.log(my_string[index]);
// }

// MINI ACTIITY (20 mins.) Finish by 9:40AM
// 1. Loop through the  'my_name' variable which has a string with your name on it.
// 2. Display each letter in the console but EXCLUDE all the vowels from it.
// 3. Send a screenshot of the output in our B303 google hangouts.

// let my_name = "Peterjan Dominic Camacho";

// Function to check if a character is a vowel
// function isVowel(char) {
//   let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   return vowels.includes(char);
// }

// Loop through the name and display each letter (excluding vowels)
// for (let i = 0; i < my_name.length; i++) {
//   let currentChar = my_name[i];
//   if (!isVowel(currentChar)) {
//     console.log(currentChar);
//   }
// }

let name_two = "rafael";
for (let index = 0; index < name_two.length; index++) {
  console.log(name_two[index]);

  if (name_two[index].toLowerCase() == "a") {
    console.log("Skipping...");
    continue;
  }
  if (name_two[index] == "e") {
    break;
  }
  console.log(name_two[index]);
}

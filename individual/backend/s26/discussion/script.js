// [SECTION] Arrays and Indexes
let grades = [98.5, 94.3, 89.2, 90.1];
let computer_brands = [
  "acer",
  "asus",
  "lenovo",
  "neo",
  "redfox",
  "gateway",
  "toshiba",
  "fujitsu",
  "lenovo",
];
let mixed_array = [12, "asus", null, undefined, {}];

// Alternative way to write arrays
let my_task = ["drink html", "eat javascript", "inhale CSS", "bake sass"];

// Reassigning values
console.log("Array before assignment:");
console.log(my_task);

my_task[0] = "run Hello World";
console.log("Array after reassignment:");
console.log(my_task);

// [SECTION] Reading from Arrays
console.log(computer_brands[1]);
console.log(grades[3]);

// Getting the length of an array
console.log(computer_brands.length);

// Accessing last element in an Array
let index_of_last_element = computer_brands.length - 1;
console.log(computer_brands[index_of_last_element]);

// [SECTION] Array Methods
let fruits = ["apple", "orange", "kiwi", "passionfruit"];

// Push method
console.log("Current array:");
console.log(fruits);

fruits.push("mango", "cocomelon");

console.log("Updated array after push method:");
console.log(fruits);

// Pop Method
console.log("Current array:");
console.log(fruits);

let removed_item = fruits.pop();

console.log("Updated array after pop method:");
console.log(fruits);
console.log("Removed fruit: " + removed_item);

// Unshift Method
console.log("Current array:");
console.log(fruits);

fruits.unshift("lime", "star apple");

console.log("Updated array after unshift method:");
console.log(fruits);

// Shift Method
console.log("Current array:");
console.log(fruits);

fruits.shift("lime", "star apple");

console.log("Updated array after shift method:");
console.log(fruits);

// Splice Method
console.log("Current array:");
console.log(fruits);

fruits.splice(1, 2, "lime", "cherry");

console.log("Updated array after splice method:");
console.log(fruits);

// Sort Method
console.log("Current array:");
console.log(fruits);

fruits.sort();

console.log("Updated array after sort method:");
console.log(fruits);

// [Sub-section] Non-Mutator Methods

// indexOf method
let index_of_lenovo = computer_brands.indexOf("lenovo");
console.log("The index of lenovo is: " + index_of_lenovo);

let index_of_lenovo_from_last_item = computer_brands.lastIndexOf("lenovo");
console.log(
  "The index of lenovo starting from the end of the array is: " +
    index_of_lenovo_from_last_item
);

// Slice Method
let hobbies = ["gaming", "running", "cheating", "cycling", "writing"];

let sliced_array_from_hobbies = hobbies.slice(2);
console.log(sliced_array_from_hobbies);
console.log(hobbies);

let sliced_array_from_hobbies_B = hobbies.slice(2, 4);
console.log(sliced_array_from_hobbies_B);
console.log(hobbies);

let sliced_array_from_hobbies_C = hobbies.slice(-2);
console.log(sliced_array_from_hobbies_C);
console.log(hobbies);

// toString Method
let string_array = hobbies.toString();
console.log(string_array);

// concat Method
let greeting = ["hello", "world"];
let exclamation = ["!", "?"];

let concat_greeting = greeting.concat(exclamation);
console.log(concat_greeting);

// join Method
console.log(hobbies.join(" - "));

// foreach Method
hobbies.forEach(function (hobby) {
  console.log(hobby);
});

// map Method
let numbers_list = [1, 2, 3, 4, 5];

let numbers_map = numbers_list.map(function (number) {
  return number * 2;
});

console.log(numbers_map);

// filter Method
let filtered_numbers = numbers_list.filter(function (number) {
  return number < 3;
});
console.log(filtered_numbers);

// [SECTION] Multi-dimensional Arrays
let chess_board = [
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
];

console.log(chess_board[1][4]);
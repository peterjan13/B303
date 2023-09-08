// console.log("love", "objects");

// [SECTION] Objects

/*
    - an object is a data type that is used to represent real world objects
    - create properties and methods/functionalities
*/

// creating objects using initializers/object literals {}
let cellphone = {
  name: "Nokia 3210",
  manufactureDate: 1999,
};

console.log("Result from creating objects using initializers/object literals");
console.log(cellphone);
console.log(typeof cellphone);

// creating objects using constructor function
function Laptop(name, manufactureDate) {
  this.name = name;
  this.manufactureDate = manufactureDate;
}

// multiple instance of an object using the 'new' keyword
// this method is called instantiation
let laptop = new Laptop("Lenovo", 2008);
console.log("Result from creating objects using constructor function");
console.log(laptop);

let laptop2 = new Laptop("Macboook Air", 2020);
console.log("Result from creating objects using constructor function");
console.log(laptop2);

// [SECTION] Accessing Object Properties

// using square bracket notation
console.log("Result from square bracket notation: " + laptop2["name"]);

// using dot notation
console.log("Result from dot notation: " + laptop2.name);

// access array objects
let array = [laptop, laptop2];
console.log(array[0]["name"]);
console.log(array[0].name);

// [SECTION] Adding/Deleting/Reassining Object Properties

// empty object using object literals
let car = {};
// empty object using constructor function/instantation
let myCar = new Object();

// adding object properties
// objectName.key = 'value'
car.name = "Honda Civic";
console.log("Result from adding properties using dot notation: ");
console.log(car);

// adding object properties using bracket notation
car["manufacturing date"] = 2019;
console.log(car["manufacturing date"]);
console.log(car["Manufacturing Date"]);

// we cannot access the object property using dot notation if the key has spaces
// console.log(car.manufacturing date");
console.log("Result from adding properties using square bracket notation: ");
console.log(car);

// deleting object properties
delete car["manufacturing date"];
console.log("result form deleting properties: ");
console.log(car);

// reassigning object properties
car.name = "Honda Civic Type R";
console.log("Result from reassigning properties: ");
console.log(car);

// [SECTION] Object Methods
/*
    - a methods is a function which acts as a property of an object
*/

let person = {
  name: "Barbie",
  greet: function () {
    // console.log('Hello! My name is ' + person.name);
    console.log("Hello! My name is " + this.name);
  },
};

console.log(person);
console.log("Result from object methods:");

// greet() is now called a method
person.greet();

// adding methods to objects
person.walk = function () {
  console.log(this.name + " walked 25 steps forward");
};

person.walk();
let friend = {
  // values can be string, number, arrays, object
  name: "Ken",
  address: {
    city: "Austin",
    state: "Texas",
    country: "USA",
  },
  email: ["ken@gmail.com", "ken@gmail.com"],
  introduce: function (person) {
    console.log(
      "Nice to meet you " +
        person.name +
        " I am " +
        this.name +
        " from " +
        this.address.city +
        " " +
        this.address.state
    );
  },
};
friend.introduce(person);

// console.log("Hello World");

//Strictly Follow the property names and spelling given in the google slide instructions.
//Note: Do not change any variable and function names.
//All variables and functions to be checked are listed in the exports.

// Create an object called trainer using object literals

let trainer = {
  name: "Ash Ketchum",
  age: 10,
  pokemon: ["Pikachu", "Charizard", "Squirtle", "Bulbasaur"],
  friends: {
    hoenn: ["May", "Max"],
    kanto: ["Brock", "Misty"],
  },
  talk: function () {
    return "Pikachu! I choose you";
  },
};

console.log(trainer);

// Initialize/add the given object properties and methods
console.log("Result of dot notation");
console.log(trainer.name);
console.log("Result of square bracket notation");
console.log(trainer["pokemon"]);
console.log("Result of talk method");
console.log(trainer.talk);

// Properties

// Methods

// Check if all properties and methods were properly added

// Access object properties using dot notation

// Access object properties using square bracket notation

// Access the trainer "talk" method

// Create a constructor function called Pokemon for creating a pokemon

function Pokemon(name, level) {
  this.name = name;
  this.level = level;
  this.health = 100 * level;
  this.attack = 3 * level;
  this.tackle = function(targetPokemon) {
    targetPokemon.health -= this.attack;
    console.log(this.name + " tackled "+ targetPokemon.name +".");
    console.log(targetPokemon.name + " health is reduced to "+targetPokemon.health+".");
    if (targetPokemon.health <= 0) {
      console.log(targetPokemon.faint());
    }
    console.log(targetPokemon);
  };
  this.faint = function() {
    return this.name + " has fainted.";
  };
}

let Pikachu = new Pokemon("Pikachu", 12);
console.log(Pikachu);
let Geodude = new Pokemon("Geodude", 8);
console.log(Geodude);
let Mewtwo = new Pokemon("Mewtwo", 100);
Geodude.tackle(Pikachu);
Geodude.tackle(Pikachu);
Mewtwo.tackle(Pikachu);
Mewtwo.tackle(Pikachu);
Mewtwo.tackle(Pikachu);
Mewtwo.tackle(Pikachu);
// Create/instantiate a new pokemon

// Create/instantiate a new pokemon

// Create/instantiate a new pokemon

// Invoke the tackle method and target a different object

// Invoke the tackle method and target a different object

//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try {
  module.exports = {
    trainer: typeof trainer !== "undefined" ? trainer : null,
    Pokemon: typeof Pokemon !== "undefined" ? Pokemon : null,
  };
} catch (err) {}

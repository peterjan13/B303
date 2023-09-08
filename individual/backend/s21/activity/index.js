/*
	1. Create a function named getUserInfo which is able to return an object. 

		The object returned should have the following properties:
		
		- key - data type

		- name - String
		- age -  Number
		- address - String
		- isMarried - Boolean
		- petName - String

		Note: Property names given is required and should not be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.

*/

function getUserInfo() {
  let userInfo = {
    name: "John Doe",
    age: 25,
    address: "123 Street, Quezon City",
    isMarried: false,
    petName: "Danny",
  };
  return userInfo;
}

// CHECK
let user = getUserInfo();
console.log(user);

/*
	2. Create a function named getArtistsArray which is able to return an array with at least 5 names of your favorite bands or artists.
		
		- Note: the array returned should have at least 5 elements as strings.
			    function name given is required and cannot be changed.


		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.
	
*/

function getArtistsArray() {
  let artistsArray = [
    "Ben & Ben",
    "Arthur Nery",
    "Linkin Park",
    "Paramore",
    "Taylor Swift",
  ];
  return artistsArray;
}

// CHECK
let favoriteArtists = getArtistsArray();
console.log(favoriteArtists);

/*
	3. Create a function named getSongsArray which is able to return an array with at least 5 titles of your favorite songs.

		- Note: the array returned should have at least 5 elements as strings.
		        function name given is required and cannot be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.
*/

function getSongsArray() {
  let songsArray = [
    "Kathang Isip",
    "Binhi",
    "In the End",
    "Bring by Boring Brick",
    "Love Story",
  ];
  return songsArray;
}

// CHECK
let favoriteSongs = getSongsArray();
console.log(favoriteSongs);

/*
	4. Create a function named getMoviesArray which is able to return an array with at least 5 titles of your favorite movies.

		- Note: the array returned should have at least 5 elements as strings.
		        function name given is required and cannot be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.
*/

function getMoviesArray() {
  let moviesArray = [
    "The Lion King",
    "Meet the Robinsons",
    "Howl's Moving Castle",
    "Tangled",
    "Frozen",
  ];

  return moviesArray;
}

// CHECK
let favoriteMovies = getMoviesArray();
console.log(favoriteMovies);

/*
	5. Create a function named getPrimeNumberArray which is able to return an array with at least 5 prime numbers.

			- Note: the array returned should have numbers only.
			        function name given is required and cannot be changed.

			To check, create a variable to save the value returned by the function.
			Then log the variable in the console.

			Note: This is optional.
			
*/

function getPrimeNumberArray() {
  let primeNumbers = [];
  let num = 2; // Starting number to check for primality

  // Helper function to check if a number is prime
  function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  while (primeNumbers.length < 5) {
    if (isPrime(num)) {
      primeNumbers.push(num);
    }
    num++;
  }
  return primeNumbers;
}

// CHECK
let primeNumberArray = getPrimeNumberArray();
console.log(primeNumberArray);

//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try {
  module.exports = {
    getUserInfo: typeof getUserInfo !== "undefined" ? getUserInfo : null,
    getArtistsArray:
      typeof getArtistsArray !== "undefined" ? getArtistsArray : null,
    getSongsArray: typeof getSongsArray !== "undefined" ? getSongsArray : null,
    getMoviesArray:
      typeof getMoviesArray !== "undefined" ? getMoviesArray : null,
    getPrimeNumberArray:
      typeof getPrimeNumberArray !== "undefined" ? getPrimeNumberArray : null,
  };
} catch (err) {}

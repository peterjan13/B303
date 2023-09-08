// JSON Format Example
// {
//     "city": "Pateros",
//     "province": "Metro Manila",
//     "country": "Philippines"
// }

// [SECTION] JSON Arrays
// "cities": [
//     {
//         "city": "Quezon City",
//         "province": "Metro Manila",
//         "country": "Philippines"
//     },
//     {
//         "city": "Batangas City",
//         "province": "Batangas",
//         "country": "Philippines"
//     },
//     {
//         "city": "Star City",
//         "province": "Pasay",
//         "country": "Philippines",
//         "rides": [
//             {
//                 "name": "Star Flyer"
//             },
//             {
//                 "name": "Gabi ng Lagim"
//             }
//         ]
//     }
// ]

// [SECTION] JSON Methods
let zuitt_batches = [
  {
    batchName: "303",
  },
  {
    batchName: "271",
  },
];

// Before stringification, javascript reads the variable as a regular JS Array
console.log("Output before stringificaton:");
console.log(zuitt_batches);

// After the JSON.stringify function, javascript now reads the variable as a string (equivalent to converting the array into JSON format).
console.log("Output after stringification");
console.log(JSON.stringify(zuitt_batches));

// User details
let first_name = prompt("What is your fist name?");
let last_name = prompt("What is your last name?");

let other_data = JSON.stringify({
  firstName: first_name,
  lastName: last_name,
});

console.log(other_data);

// [SECTION] Convert Stringified JSON into Javascript Objects
let other_data_JSON = `[{"firstName": "Earl", "lastName": "Diaz"}]`;
let parsed_other_data = JSON.parse(other_data_JSON);
console.log(parsed_other_data);

console.log(parsed_other_data[0].firstName);

let users = ["Dwayne Johnson", "Steve Austin", "Kurt Angle", "Dave Bautista"];

console.log("Original Array:");
console.log(users);

/*
    Important note: Don't pass the array as an argument to the function. 
    The functions must be able to manipulate the current users array.
*/

/*
    1. Create a function called addItem which is able to receive a single argument and add the input at the end of the users array.
        -function should be able to receive a single argument.
        -add the input data at the end of the array.
        -The function should not be able to return data.
        -invoke and add an argument to be passed in the function.
        -log the users array in the console.

*/

function addItem(newItem) {
  users.push(newItem);
  console.log(users);
}

addItem("John Cena");

/*
    2. Create function called getItemByIndex which is able to receive an index number as a single argument return the item accessed by its index.
        -function should be able to receive a single argument.
        -return the item accessed by the index.
        -Create a global variable called outside of the function called itemFound and store the value returned by the function in it.
        -log the itemFound variable in the console.

*/

let itemFound;
function getItemByIndex(index) {
  return index < users.length
    ? users[index]
    : "The provided index exceed the scope of the array.";
}
itemFound = getItemByIndex(2);
console.log(itemFound);

/*
    3. Create function called deleteItem which is able to delete the last item in the array and return the deleted item.
        -Create a function scoped variable to store the last item in the users array.
        -Shorten the length of the array by at least 1 to delete the last item.
        -return the last item in the array which was stored in the variable.

*/

function deleteItem() {
  // Create a function-scoped variable to store the last item in the users array.
  let deletedItem = users[users.length - 1];

  // Shorten the length of the array by at least 1 to delete the last item.
  users.length = Math.max(0, users.length - 1);

  // Return the last item in the array which was stored in the function-scoped variable.
  return deletedItem;
}

// Create a global-scoped variable outside of the function and store the result of the function.
let deletedUser = deleteItem();

// Log the global-scoped variable in the console.
console.log(deletedUser);
console.log(users);

/*
    4. Create function called updateItemByIndex which is able to update a specific item in the array by its index.
        -Function should be able to receive 2 arguments, the update and the index number.
        -First, access and locate the item by its index then re-assign the item with the update.
        -This function should not have a return.
        -Invoke the function and add the update and index number as arguments.
        -log the users array in the console.

*/

function updateItemByIndex(updateItem,indexNum){
    users[indexNum]=updateItem;
    console.log(users);
}

updateItemByIndex("Triple H",3);

/*
    5. Create function called deleteAll which is able to delete all items in the array.
        -You can modify/set the length of the array.
        -The function should not return anything.
*/
    function deleteAll(){
        users = [];
    }
    deleteAll();
    console.log(users);

/*
    6. Create a function called isEmpty which is able to check if the array is empty.
        -Add an if statement to check if the length of the users array is greater than 0.
            -If it is, return false.
        -Else, return true.
        -Create a global variable called outside of the function  called isUsersEmpty and store the returned value from the function.
        -log the isUsersEmpty variable in the console.

*/

    let isUserEmpty;
    function isEmpty(){
        if (users.length <= 0) {
            return true;
        } else {
            return false;
        }

    }
    isUserEmpty = isEmpty();
    console.log(isUserEmpty);

//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try {
  module.exports = {
    users: typeof users !== "undefined" ? users : null,
    addItem: typeof addItem !== "undefined" ? addItem : null,
    getItemByIndex:
      typeof getItemByIndex !== "undefined" ? getItemByIndex : null,
    deleteItem: typeof deleteItem !== "undefined" ? deleteItem : null,
    updateItemByIndex:
      typeof updateItemByIndex !== "undefined" ? updateItemByIndex : null,
    deleteAll: typeof deleteAll !== "undefined" ? deleteAll : null,
    isEmpty: typeof isEmpty !== "undefined" ? isEmpty : null,
  };
} catch (err) {}

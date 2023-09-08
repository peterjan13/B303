//Note: don't add a semicolon at the end of then().
//Fetch answers must be inside the await () for each function.
//Each function will be used to check the fetch answers.
//Don't console log the result/json, return it.

// Get Single To Do [Sample]
async function getSingleToDo(){

    return await (

       //add fetch here.
       
       fetch('<urlSample>')
       .then((response) => response.json())
       .then((json) => json)
   
   
   );

}



// Getting all to do list item
async function getAllToDo(){

   return await (

      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then((data) => data.map((item) => item.title))
      .then((json) => {
                  console.log(json);
                  return json;
             })


  );

}
getAllToDo()

// [Section] Getting a specific to do list item
async function getSpecificToDo(){
   
   return await (

      fetch("https://jsonplaceholder.typicode.com/todos/1", {
         method: "GET",
       })
         .then((response) => response.json())
         .then((json) => {
                  console.log(json);
                  return json;
             })


   );

}
getSpecificToDo();

// [Section] Creating a to do list item using POST method
async function createToDo(){
   
   return await (

      fetch('https://jsonplaceholder.typicode.com/todos', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            completed: false,
            title: "Create To Do List Item",
            userId: 1
         })
      })

      .then(response => response.json())
      .then((json) => {
                  console.log(json);
                  return json;
             })


   );

}
createToDo();

// [Section] Updating a to do list item using PUT method
async function updateToDo() {
   return await (fetch('https://jsonplaceholder.typicode.com/todos/1',{

      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
         title: 'Corrected Post!',
         description: 'To update my list with a different data structure',
         status: 'pending',
         dateCompleted: 'pending',
         userID: '1'
      })
   })
 .then(response => response.json())
 .then((json) => {
                  console.log(json);
                  return json;
             }));
}
updateToDo();


// [Section] Deleting a to do list item
async function deleteToDo(){
   
   return await (

       fetch('https://jsonplaceholder.typicode.com/todos/1', {
         method: 'DELETE'
      })
      .then((response) => response.json())
      .then((json) => {
                  console.log(json);
                  return json;
             })


   );

}
deleteToDo();

//Do not modify
//For exporting to test.js
try{
   module.exports = {
       getSingleToDo: typeof getSingleToDo !== 'undefined' ? getSingleToDo : null,
       getAllToDo: typeof getAllToDo !== 'undefined' ? getAllToDo : null,
       getSpecificToDo: typeof getSpecificToDo !== 'undefined' ? getSpecificToDo : null,
       createToDo: typeof createToDo !== 'undefined' ? createToDo : null,
       updateToDo: typeof updateToDo !== 'undefined' ? updateToDo : null,
       deleteToDo: typeof deleteToDo !== 'undefined' ? deleteToDo : null,
   }
} catch(err){

}
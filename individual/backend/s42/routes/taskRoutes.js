const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController.js");

// Insert routes here
// Creating a new task
router.post("/", (request, response) => {
  // MINI ACTIVITY (15 mins.)
  // Use the proper function from the TaskController that will create a new task in the database.
  // Make sure to pass the request body as an argument so the function will be able to use the 'name' property.
  TaskController.createTask(request.body).then(result => {
    response.send(result);
  })
});

// Get all 
router.get("/", (request, response) => {
  TaskController.getAllTasks().then((result) => {
    response.send(result);
  });
});

module.exports = router;

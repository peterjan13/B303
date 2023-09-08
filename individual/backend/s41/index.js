// Server variables
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 4000;

// MongoDB Connection
mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@b303-camacho.jyiehg0.mongodb.net/b303-todo?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

let database = mongoose.connection;

database.on("error", () => console.log("Connection error :("));
database.once("open", () => console.log("Connected to MongoDB!"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// [SECTION] Mongoose Schema
const taskSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    default: "pending",
  },
});

// [SECTION] Models
const Task = mongoose.model("Task", taskSchema);

// [SECION] Routes
// Creating a new task
app.post("/tasks", (request, response) => {
  // Check if the task already exists by utilizing the 'name' property. If it does, then return the response to user
  Task.findOne({ name: request.body.name }).then((result, error) => {
    if (result != null && result.name == request.body.name) {
      return response.send("Duplicate task found!");
    } else {
      // 1. Create new instance of the task model which will contain that properties required based on the schema
      let newTask = new Task({
        name: request.body.name,
      });

      // 2. Save the new task to the database
      newTask.save().then((savedTask, error) => {
        if (error) {
          return response.send({
            message: error.message,
          });
        }
        return response.send(201, "New task created!");
      });
    }
  });
});

// Get all tasks
app.get("/tasks", (request, response) => {
  Task.find({}).then((result, error) => {
    if (error) {
      return response.send({
        message: error.message,
      });
    }
    return response.status(200).json({
      tasks: result,
    });
  });
});

// Server Listening
app.listen(port, () => console.log(`Server is running at localhost:${port}`));

module.exports = app;

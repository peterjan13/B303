const Task = require("../models/Task.js");

module.exports.getAllTasks = () => {
  return Task.find({}).then((result, error) => {
    if (error) {
      return {
        message: error.message,
      };
    }
    return {
      tasks: result,
    };
  });
};

module.exports.createTask = (request_body) => {
  return Task.findOne({ name: request_body.name }).then((result, error) => {
    if (result != null && result.name == request_body.name) {
      return {
        message: "Duplicate user found!",
      };
    } else {
      // 1. Create new instance of the task model which will contain that properties required based on the schema
      let newTask = new Task({
        name: request_body.name,
      });

      // 2. Save the new task to the database
      return newTask.save().then((savedTask, error) => {
        if (error) {
          return {
            message: error.message,
          };
        }
        return {
          message: "New task created!",
        };
      });
    }
  });
};

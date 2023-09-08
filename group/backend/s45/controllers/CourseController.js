const Course = require('../models/Course.js');

// addCourse controller
module.exports.addCourse = (request_body) => {
    let { name, description, price } = request_body;
    let newCourse = new Course({
      name,
      description,
      price,
    });
  
    return newCourse
      .save()
      .then((savedCourse) => {
        if (savedCourse) {
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.error("Error creating course:", error);
        return { success: false, message: "An error occurred while creating the course." };
      });
  };
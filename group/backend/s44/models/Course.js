const mongoose = require("mongoose");

// Schema
const course_schema = new mongoose.Schema({
  name: {
    type: String,
    // Requires the data for this our fields/properties to be included when creating a record.
    // The "true" value defines if the field is required or not and the second element in the array is the message that will be printed out in our terminal when the data is not present
    required: [true, "Course is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdOn: {
    type: Date,
    // The "new Date()" expression instantiates a new "date" that stores the current date and time whenever a course is created in our database
    default: new Date(),
  },
  // The "enrollees" property/field will be an array of objects containing the user IDs and the date and time that the user enrolled to the course
  // We will be applying the concept of referencing data to establish a relationship between our courses and users
  enrollees: [
    {
      userId: {
        type: String,
        required: [true, "UserId is required"],
      },
      enrolledOn: {
        type: Date,
        default: new Date(),
      },
    },
  ],
});

module.exports = mongoose.model("Course", course_schema);

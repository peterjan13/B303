const mongoose = require("mongoose");

// [SECTION] Mongoose Schema
const taskSchema = new mongoose.Schema({
    name: String,
    status: {
      type: String,
      default: "pending",
    },
  });

module.exports = mongoose.model("Task", taskSchema);

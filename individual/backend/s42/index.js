// Server variables
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const taskRoutes = require('./routes/taskRoutes.js');
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
app.use('/api/tasks', taskRoutes);

// Server Listening
app.listen(port, () => console.log(`Server is running at localhost:${port}`));

module.exports = app;

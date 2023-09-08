// Server variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = 4000;
const userRoutes = require("./routes/userRoutes.js");
const courseRoutes = require("./routes/courseRoutes.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // This will allow our hosted front-end app to send requests to this server

// Routes
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);

// Database connection
mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@b303-camacho.jyiehg0.mongodb.net/b303-booking-api?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("error", () =>
  console.log("Can't connect to database.")
);
mongoose.connection.once("open", () => console.log("Connected to MongoDB!"));

// Since we're hosting this API in the cloud, the port to be used should be flexible hence, the use of the process.env.PORT which will take the port that the cloud server uses if the 'port' variable isn't available.
app.listen(process.env.PORT || port, () => {
  console.log(
    `Booking System API is now runing at localhost:${process.env.PORT || port}`
  );
});

module.exports = app;

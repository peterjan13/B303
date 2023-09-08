//Server Variables
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
//const TaskRoute = require('./routes/taskRoutes.js');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;
const userRoutes = require('./routes/userRoutes.js');
const courseRoutes = require('./routes/courseRoutes.js');

//Database Connection
mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@batch303-panes.zwprpr3.mongodb.net/b303-booking-api?retryWrites=true&w=majority`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

let database = mongoose.connection;
database.on("error", () => console.log('Connection error:('));
database.once('open', () => console.log('Connected to MongoDB!'));

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//Routes
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

app.listen(port, () => {
	console.log(`Booking System API is now running at localhost:${port}`);
})

module.exports = app;



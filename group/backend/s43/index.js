// Server variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = 4000;
const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// Database Connection
mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@b303-cordero.7wgexnk.mongodb.net/b303-booking-api?retryWrites=true&w=majority`,{
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on('error', () => console.log("Can't connect to database."));
mongoose.connection.once('open', () => console.log('Connected to MongoDB!'));

app.listen(process.env.PORT || port, () => {
	console.log(`Booking System API is now running at localhost: ${process.env.PORT || port}`)
});

module.exports = app;
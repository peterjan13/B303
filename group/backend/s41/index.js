const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 4000;

mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@b303-cordero.7wgexnk.mongodb.net/b303-todo?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("error", () => console.log("Connection error :("));
mongoose.connection.once("open", () => console.log("Connected to MongoDB!"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Server is running at port ${port}`));

// Create the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
  },
  status: {
    type: String,
    default: "pending"
  }
});

// Create the User model
const User = mongoose.model("User", userSchema);

app.post('/signup', (request, response) => {
  User.findOne({username: request.body.username}).then((result) => {
    if(result != null && result.username == request.body.username) {
      return response.send(200, "Duplicate username found");
    } 
    else {
      //Creates new instance
      if((request.body.username !== "" && request.body.username !== null && request.body.username !== undefined) && (request.body.password !== "" && request.body.password !== null && request.body.password !== undefined)){
        let newUser = new User({
          username: request.body.username,
          password: request.body.password
        });
        newUser.save().then((savedUser, error) => {
          if(error) return response.send({message: error.message})
          return response.send(201, 'New User Created');
        })
      }
      else{
        return response.send(400, "Both username and password must be provided");
      }
    }}
  )
})

module.exports = app;

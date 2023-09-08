// Server variables for initialization
const express = require("express");
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server Listening
app.listen(port, () => console.log(`Server is running at port ${port}`));

// [SECTION] Routes
app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.post("/greeting", (request, response) => {
  response.send(
    `Hello there ${request.body.firstName} ${request.body.lastName}`
  );
});

let users = [];

app.post("/register", (request, response) => {
  if (request.body.username !== "" && request.body.password !== "") {
    users.push(request.body);

    response.send(
      `User ${request.body.username} has successfully been registered!`
    );
  } else {
    response.send("Please input BOTH username AND password.");
  }
});

// Gets the list/array of users
app.get('/users', (request, response) => {
    response.send(users);
})

module.exports = app;

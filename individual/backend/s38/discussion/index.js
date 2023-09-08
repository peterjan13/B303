let http = require("http");

const port = 4000;

// Mock Database
let users = [
  {
    name: "Paolo",
    email: "paolo@email.com",
  },
  {
    name: "Shinji",
    email: "shinji@email.com",
  },
];

const app = http.createServer((req, res) => {
  // /items GET route
  if (req.url == "/items" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });

    res.end("Data retrieved from the database");
  }

  // /items POST route
  if (req.url == "/items" && req.method == "POST") {
    res.writeHead(200, { "Content-Type": "text/plain" });

    res.end("Data sent to the database!");
  }

  // getting all items from mock database
  if (req.url == "/users" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify(users));
  }

  // creating a user in our database
  if (req.url == "/users" && req.method == "POST") {
    // placeholder for the data that is within the request
    let request_body = "";

    // the 'on' function listens for specific behavior within the request. in this example, we are checking for when request detects data within it. once the request receives data, it will run a function that will handle that data in its parameter.
    req.on("data", (data) => {
      request_body += data;
    });

    req.on("end", () => {
      // to check the data type of the request_body variable (by default will be JSON string)
      console.log(typeof request_body);

      // converting the JSON string into regular javascript format
      request_body = JSON.parse(request_body);

      // creating a new_user object to contain the data from the request_body
      let new_user = {
        name: request_body.name,
        email: request_body.email,
      };

      // push the new_user object into the mock database array
      users.push(new_user);

      res.end(JSON.stringify(new_user));
    });
  }
});

app.listen(port, () => console.log(`Server is running at localhost:${port}`));

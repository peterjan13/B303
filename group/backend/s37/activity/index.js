//Add solution here
let http = require("http");

const port = 3000;

const app = http.createServer((req, res) => {
  if (req.url == "/login") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("You are in the login page.");
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Error! Web Page not available');
  }
});

app.listen(port);

console.log(`Server now accessible at localhost:${port}.`);

//Do not modify
module.exports = { app };

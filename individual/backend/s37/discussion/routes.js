let http = require('http');

// create a variable port to store the port number: 4000
const port = 4000

// create a variable app that stores the output of the createServer() method
// this allows us to use the http createServer's other methods
const app = http.createServer((req, res) => {

        // req is an object that is sent via the browser
        // url is a property that refers to the url or link in the browser
        if(req.url == '/greeting') {

            res.writeHead(200, {'Content-Type': 'text/plain'});

            res.end('Hello Again');

        } else if(req.url == '/homepage') {

            res.writeHead(200, {'Content-Type': 'text/plain'});

            res.end('Welcome to the homepage.');

        // all other routes that are not included in if else-ig 
        } else {

            res.writeHead(404, {'Content-Type': 'text/plain'});

            res.end('Page not available');
        }
})

app.listen(port);

console.log(`Server now accessible at localhost:${port}.`);
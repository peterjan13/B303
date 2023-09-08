let http = require("http");

// The http module has a createServer() method that accepts a function as an argument and allows for a creation of a server
// The arguments passed in the function are request and response objects (data type) that contains methods that allow us to receive requests from the client and send responses back to it
// 4000 is the port where the server will listen to. A port is a virtual point where the network connections start and end


http.createServer(function(request, response){

    // 200 - status code for the response - means ok
    // sets the content-type of the response to be a plain text message
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // send the response with the text content 'Hello World'
    response.end('Hello World');

}).listen(4000)

// When server is running, console will print message:
console.log('Server is running at port 4000');


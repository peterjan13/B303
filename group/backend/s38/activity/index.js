//Add code here
let http = require('http');
const port = 4000;
const app = http.createServer((req,res)=>{
    if(req.url == '/' && req.method == 'GET') {
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end('Welcome to booking system')
    }
    if(req.url == '/profile' && req.method == 'GET') {
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end('Welcome to your profile!')
    }
    if (req.url == "/courses" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Here’s our courses available")
    }
    if(req.url == '/addcourse' && req.method == 'POST'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Add a course to our resources');
    }
    if(req.url == '/archivecourses' && req.method == 'DELETE'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Archive courses to our resources");
    }
    if(req.url == '/updatecourse' && req.method == 'PUT'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Update a course to our resources");
    }
}) 

















//Do not modify
//Make sure to save the server in variable called app
if(require.main === module){
    app.listen(4000, () => console.log(`Server running at port 4000`));
}

module.exports = app;

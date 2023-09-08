const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Server is running at port ${port}`));

app.get("/home", (request, response) => {
  response.send("Welcome to the home page");
});

let users = [{
    username: "john",
    password: "admin1234"
}]

app.get("/users", (request, response) => {
  response.send(users);
});

app.delete('/delete-user', (request, response) => {
    let message;
    if(users.length > 0){
        for(let index=0; index<users.length; index++){
            if(request.body.username == users[index].username){
                users.splice(index, 1);
                message = `User ${request.body.username} has been deleted.`;
                break;
            }
        }
        if(typeof message === 'undefined') message = `User does not exist`;
    }  
    else message = "No Users Found";
    response.send(message);
})

module.exports = app;

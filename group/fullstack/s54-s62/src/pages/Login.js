import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function LoginForm() {
  // Create input states for the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Create a state for conditionally rendering the submit button
  const [isActive, setIsActive] = useState(true);

  // Use useEffect to enable/disable the submit button based on input states
  useEffect(() => {
		if((email !== "" && password !== "")) setIsActive(true);
		else setIsActive(false);
	}, [email, password]);

  // Handle form submit event
  const loginUser = (event) => {
		//prevents page reloading
		event.preventDefault();
		fetch('http://localhost:4000/api/users/login', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		}).then(response => response.json()).then(result => {
			if(result) {
				setEmail("");
				setPassword("");
				if(result.accessToken) {
					console.log(result);
					alert("Thank you for logging in");
				}
				else alert("Unsuccessfull Login");
				
			}
			else alert("Error Occured, Please try Again")
			
		})
	}

  return (
		<Form onSubmit = {event => loginUser(event)}>
        	<h1 className="my-5 text-center">Login</h1>     
            <Form.Group className = "mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control 
	                type="email" 
	                placeholder="Enter Email" 
	                value = {email}
	                onChange = {event => {setEmail(event.target.value)}}
	                required
                />
            </Form.Group>
            <Form.Group className = "mb-3">
                <Form.Label>Password:</Form.Label>
                <Form.Control 
	                type="password" 
	                placeholder="Enter Password" 
	                value = {password}
	                onChange = {event => {setPassword(event.target.value)}}
	                required
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isActive === false}>Submit</Button>  
        </Form>
  );
}

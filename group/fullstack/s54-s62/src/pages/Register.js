import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Register(){
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [mobileNo, setMobileNo] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isActive, setIsActive] = useState("false");

	function registerUser(event) {
		// prevents page load upon form submission
		event.preventDefault();

		fetch('http://localhost:4000/api/users/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName:lastName,
				email: email,
				mobileNo: mobileNo,
				password: password
			})
		}).then(response => response.json()).then(result => {

			if(result){
				setFirstName("")
				setLastName("")
				setEmail("")
				setMobileNo("")
				setPassword("")
				setConfirmPassword("")

				alert(result.message)
			} else {
				alert('Please try again :(')
			}
		})
	}
	
	// The useEffect arrow function will trigger everytime there are changes in the data within the 2nd argument array.
	// Note: If the 2nd argument is empty, then the function will only run upon the initial loading of the document.
	useEffect(() => {
		// Insert effect here
		if ((firstName !== "" && lastName !== "" && email !== "" && mobileNo !== "" && password !== "" && confirmPassword !== "") && (password === confirmPassword) && (mobileNo.length === 11)){
			setIsActive(true)
		} else {
			setIsActive(false)
		}

	}, [firstName, lastName, email, mobileNo, password, confirmPassword]);

	return (
		<Form onSubmit={(event) => registerUser(event)}>
                <h1 className="my-5 text-center">Register</h1>
                    <Form.Group>
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter First Name" 
                        required
                        value={firstName}
                        onChange={event => {setFirstName(event.target.value)}}
                    />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter Last Name" 
                        required
                        value={lastName}
                        onChange={event => {setLastName(event.target.value)}}
                    />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Enter Email" 
                        required
                        value={email}
                        onChange={event => {setEmail(event.target.value)}}
                    />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mobile No:</Form.Label>
                        <Form.Control 
                        type="number" 
                        placeholder="Enter 11 Digit No." 
                        required
                        value={mobileNo}
                        onChange={event => {setMobileNo(event.target.value)}}
                    />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Enter Password" 
                        required
                        value={password}
                        onChange={event => {setPassword(event.target.value)}
                        	}
                    />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Confirm Password" 
                        required
                        value={confirmPassword}
                        onChange={event => {setConfirmPassword(event.target.value)}}
                    />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={isActive == false}>Submit</Button>
                        
                </Form>
	)
}
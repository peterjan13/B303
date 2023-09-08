import { Form, Button } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../UserContext.js';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Register(){
	const {user} = useContext(UserContext);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [mobileNo, setMobileNo] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isActive, setIsActive] = useState(false);

	function registerUser(event){
		// Prevents page load upon form submission
		event.preventDefault();

		// Sends a request to the /register endpoint which will include all the fields necessary for that route.
		fetch(`${process.env.REACT_APP_API_URL}/api/users/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				mobileNo: mobileNo,
				password: password
			})
		}).then(response => response.json()).then(result => {
			if(result){
				// Resets all input fields
				setFirstName("")
				setLastName("")
				setEmail("")
				setMobileNo("")
				setPassword("")
				setConfirmPassword("")

				Swal.fire({
					title: 'Register Successful',
					text: result.message,
					icon: 'success'
				})
			} else {
				Swal.fire({
					title: 'Something went wrong',
					text: 'Please try again.',
					icon: 'error'
				})
			}
		})
	}

	// The useEffect arrow function will trigger everytime there are changes in the data within the 2nd argument array.
	// Note: If the 2nd argument array is empty, then the function will only run upon the initial loading of the component.
	useEffect(() => {
		// Checks if all fields aren't empty, if password and confirm password fields are matching, and mobile number is 11 characters.
		if((firstName !== "" && lastName !== "" && email !== "" && mobileNo !== "" && password !== "" && confirmPassword !== "") && (password === confirmPassword) && (mobileNo.length === 11)){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [firstName, lastName, email, mobileNo, password, confirmPassword]);

	return(
		(user.id !== null) ? 
			<Navigate to='/courses'/>
		:
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
		                	onChange={event => {setPassword(event.target.value)}}
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
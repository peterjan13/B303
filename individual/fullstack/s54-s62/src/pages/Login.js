import {Form, Button} from 'react-bootstrap';
import {useState, useEffect, useContext} from 'react';
import UserContext from '../UserContext.js';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Login(){
	// We're able to access the 'user' state from App.js through the use of react context/provider.
	const {user, setUser} = useContext(UserContext);

	// State hooks to store the values of the input fields
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// State to determine whether submit button is enabled or not
	const [isActive, setIsActive] = useState(true);

	function authenticate(e) {
        // Prevents page redirection via form submission
        e.preventDefault();

	    fetch(`${process.env.REACT_APP_API_URL}/api/users/login`,{

	        method: 'POST',
	        headers: {
	            "Content-Type": "application/json"
	        },
	        body: JSON.stringify({

	            email: email,
	            password: password

	        })
	    })
	    .then(response => response.json())
	    .then(result => {
	    	console.log(result);

	        if(result.accessToken){
	        	localStorage.setItem('token', result.accessToken);
	        	localStorage.setItem('userId', result.userId);

	        	retrieveUserDetails(result.accessToken, result.userId)

	        	// Clear input fields after submission
			    setEmail('');
			    setPassword('');

	            Swal.fire({
	            	title: 'Login Success',
	            	text: 'You have logged in successfully!',
	            	icon: 'success'
	            })
	            
	        } else {

	        	Swal.fire({
	        		title: 'Something went wrong',
	        		text: `${email} does not exist`,
	        		icon: 'warning'
	        	})
	        }
	    })
    }

    const retrieveUserDetails = (token, userId) => {
    	fetch(`${process.env.REACT_APP_API_URL}/api/users/details`, {
    		method: 'POST',
    		headers: {
    			Authorization: `Bearer ${token}`,
    			'Content-Type': 'application/json'
    		}, 
    		body: JSON.stringify({
    			id: userId
    		})
    	})
    	.then(response => response.json())
    	.then(result => {
    		// Once it gets the user details, we will set the global user state to have the ID and isAdmin properties of the user who is logged in.
    		setUser({
    			id: result._id,
    			isAdmin: result.isAdmin
    		})
    	})
    }

	useEffect(() => {

        // Validation to enable submit button when all fields are populated and both passwords match
        if(email !== '' && password !== ''){
            setIsActive(true);
        }else{
            setIsActive(false);
        }

    }, [email, password]);

	return(
		(user.id !== null) ?
			<Navigate to='/courses'/>
		:
			<Form onSubmit={(e) => authenticate(e)}>
	            <h1 className="my-5 text-center">Login</h1>
	            <Form.Group controlId="userEmail">
	                <Form.Label>Email address</Form.Label>
	                <Form.Control 
	                    type="email" 
	                    placeholder="Enter email"
	                    value={email}
	                    onChange={(e) => setEmail(e.target.value)}
	                    required
	                />
	            </Form.Group>

	            <Form.Group controlId="password">
	                <Form.Label>Password</Form.Label>
	                <Form.Control 
	                    type="password" 
	                    placeholder="Password"
	                    value={password}
	                    onChange={(e) => setPassword(e.target.value)}
	                    required
	                />
	            </Form.Group>

	            <Button variant="primary" type="submit" id="submitBtn" disabled={isActive == false}>
	                Submit
	            </Button>
	        </Form> 
	)
}
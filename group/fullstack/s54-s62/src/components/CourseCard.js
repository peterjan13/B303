import {Card, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function CourseCard({course}){

	// Destructuring the contents of 'course'
	const {name, description, price} = course;

	// A state is just like a variable but with the concept of getters and setters. The getter is responsible for retrieving the current value of the state, while the setter is responsible for modifying the current value of the state. The useState() hook is responsible for setting the initial value of the state.
	
	const [count, setCount] = useState(0);
	const [seats, setSeats] = useState(30);
	
	function enroll() {
    if (seats > 0) {
      	setCount(prev_value => prev_value + 1);
		setSeats(prev_value => prev_value - 1);
    } else {
      alert('No more seats available');
    }
  }
	// S55 Activity
	/*
	1. Create a 'seats' state that will have an initial value of 30
	2. Create a functionality wherein when you click the 'enroll' button, the 'seats' state will go down in value by 1 as well
	3. Once the 'seats' state reaches 0 in value, show an alert that says 'No more seats available'
	4. Push to gitlab once done.
	*/

	return(
		<Card>
			<Card.Body>
				<Card.Title>{name}</Card.Title>

				<Card.Subtitle>Description:</Card.Subtitle>
				<Card.Text>{description}</Card.Text> 

				<Card.Subtitle>Price:</Card.Subtitle>
				<Card.Text>PHP{price}</Card.Text>

				<Card.Subtitle>Enrollees:</Card.Subtitle>
				<Card.Text>{count}</Card.Text>

				<Card.Subtitle>Seats Available:</Card.Subtitle>
				<Card.Text>{seats} seats available </Card.Text>

			    <Button variant="primary" onClick={ enroll }>Enroll</Button>
			</Card.Body>
		</Card>
	)
}

// PropTypes is used for validating the data from the props
CourseCard.propTypes = {
	course: PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
}

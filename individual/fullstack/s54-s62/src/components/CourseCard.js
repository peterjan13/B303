import {Card, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CourseCard({course}){

	// Destructuring the contents of 'course'
	const {_id, name, description, price} = course;

	return(
		<Card>
			<Card.Body>
				<Card.Title>{name}</Card.Title>

				<Card.Subtitle>Description:</Card.Subtitle>
				<Card.Text>{description}</Card.Text> 

				<Card.Subtitle>Price:</Card.Subtitle>
				<Card.Text>PHP{price}</Card.Text>

			    <Link className="btn btn-primary" to={`/courses/${_id}`}>View Details</Link>
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
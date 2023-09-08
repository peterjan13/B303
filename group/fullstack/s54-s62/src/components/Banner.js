import {Button, Row, Col} from 'react-bootstrap';

export default function Banner(){
	return(
		<Row>
			<Col className="p-5 text-center">
				<h1>Earl's Fishing Academy</h1>
				<p>Fish for everyone!</p>
				<Button variant="primary">Enroll now!</Button>
			</Col>
		</Row>
	)
}

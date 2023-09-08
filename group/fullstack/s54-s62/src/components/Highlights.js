import {Card, Row, Col} from 'react-bootstrap';

export default function Highlights() {
	return (
		<Row className="my-3 text-center">
			<Col xs={12} md={4}>
				<Card className="cardHighlight  p-3">
				    <Card.Body>
				        <Card.Title>
				            <h2>Learn from Sea</h2>
				        </Card.Title>
				        <Card.Text>
				            Pariatur adipisicing aute do amet dolore cupidatat. Eu labore aliqua eiusmod commodo occaecat mollit ullamco labore minim. Minim irure fugiat anim ea sint consequat fugiat laboris id. Lorem elit irure mollit officia incididunt ea ullamco laboris excepteur amet. Cillum pariatur consequat adipisicing aute ex.
				        </Card.Text>
				    </Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4}>
				<Card className="cardHighlight  p-3">
				    <Card.Body>
				        <Card.Title>
				            <h2>Fish Now, Eat Later</h2>
				        </Card.Title>
				        <Card.Text>
				            Pariatur adipisicing aute do amet dolore cupidatat. Eu labore aliqua eiusmod commodo occaecat mollit ullamco labore minim. Minim irure fugiat anim ea sint consequat fugiat laboris id. Lorem elit irure mollit officia incididunt ea ullamco laboris excepteur amet. Cillum pariatur consequat adipisicing aute ex.
				        </Card.Text>
				    </Card.Body>
				</Card>			</Col>
			<Col xs={12} md={4}>
				<Card className="cardHighlight  p-3">
				    <Card.Body>
				        <Card.Title>
				            <h2>Be part of our Fishing Community</h2>
				        </Card.Title>
				        <Card.Text>
				            Pariatur adipisicing aute do amet dolore cupidatat. Eu labore aliqua eiusmod commodo occaecat mollit ullamco labore minim. Minim irure fugiat anim ea sint consequat fugiat laboris id. Lorem elit irure mollit officia incididunt ea ullamco laboris excepteur amet. Cillum pariatur consequat adipisicing aute ex.
				        </Card.Text>
				    </Card.Body>
				</Card>
			</Col>
		</Row>
	)
}
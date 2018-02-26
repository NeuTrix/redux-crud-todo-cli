import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

const TaskCounter = (props) => {

	const spacing = {

		xs: { title: 4, badge: 8 }
	}

	return ( 
		<Row>
			<Col xs = { spacing.xs.title } >
				Todos Count:   
			</Col>
			
			<Col xs = { spacing.xs.badge } >
				<Badge> 
					{ props.todos.length }
				</Badge>
			</Col>
		</Row>
	);

};

TaskCounter.propTypes = {
	todos: PropTypes.array.isRequired,
};

TaskCounter.defaultProps = {
	todos: [1,2,3,4,5]
};

export default TaskCounter;
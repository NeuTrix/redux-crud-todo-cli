import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

const TaskCounter = (props) => {

	const style = {
		color: 'steelblue',
		outline: '1px solid lightgrey',
		padding: 10,
		borderRadius: 10
	};

	const spacing = {
		xs: { title: 4, badge: 8 },
		sm: { title: 2, badge: 10 },
		md: { title: 2, badge: 10 }
	};

	return ( 
		<Row style = { style } >
			<Col
				xs = { spacing.xs.title } 
				sm = { spacing.sm.title } 
				md = { spacing.md.title } 
			>
				Todos Count:   
			</Col>
			
			<Col
				xs = { spacing.xs.badge } 
				sm = { spacing.sm.badge } 
				md = { spacing.md.badge } 
			>
				<Badge > 
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
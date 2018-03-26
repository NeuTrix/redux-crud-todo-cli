import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const TaskCounter = (props) => {

	const styleRow = {
		color: 'steelblue',
		outline: '1px solid lightgrey',
		padding: 10,
		borderRadius: 10
	};

	const spacing = {
		xs: { title: 5, badge: 2 },
		sm: { title: 2, badge: 1 },
		md: { title: 2, badge: 1 }
	};

	const styleCount = {
		backgroundColor: 'black',
		border: '2px solid navy',
		borderRadius: 10,
		color: 'lime',
		fontSize: '1.5em',
		textAlign: 'center',
	}

	return ( 
		<Row style = { styleRow } >
			<Col
				xs = { spacing.xs.title } 
				sm = { spacing.sm.title } 
				md = { spacing.md.title } 
				style = {{ paddingTop: 7 }}
			>
				Todos Count:   
			</Col>
			
			<Col
				style =  { styleCount }
				xs = { spacing.xs.badge } 
				sm = { spacing.sm.badge } 
				md = { spacing.md.badge } 

			>
				<span > 
					{ props.todos.length }
				</span>

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
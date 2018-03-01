// component to display the curret todo list
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const styleTitle= {
	background: '#006699',
	color: 'lightblue',
	textAlign: 'left'
};

const spacing =  { sm: {task: 6, rank: 2, date: 2, action: 2 } };	

const TodoTitleBar = (props) => {

	return (
		<Row className = 'TodoTitleBar' style= { styleTitle }>
			<Col className = 'titleTask' sm = { spacing.sm.task } >
					Task
			</Col>

			<Col className = 'titleRank' sm = { spacing.sm.rank } >
					Rank
			</Col>

			<Col className = 'titleDue' sm = { spacing.sm.date } >
					Date
			</Col>

			<Col className = 'titleAction' sm = { spacing.sm.action } >
					Action
			</Col>
		</Row>
	);
}; 

TodoTitleBar.propTypes = { };
TodoTitleBar.defaultProps = { };

export default (TodoTitleBar);
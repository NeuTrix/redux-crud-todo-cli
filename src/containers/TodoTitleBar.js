// component to display the curret todo list
import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// ============================ STYLING ============================

const styleTitle= {
	background: '#006699',
	color: 'lightblue',
	borderRadius: 5,
	marginBottom: 10,
};

const spacing =  {
		sm: {task: 5, rank: 1, action: 3, date: 2 }, 
	}	

// =========================== Container ===========================

const TodoTitleBar = (props) => {

	
	return (
	
		<Grid >

			<Row className = 'TodoTitleBar' style= { styleTitle }>
			
				<Col className = 'titleTask' sm = { spacing.sm.task } >
					Task
				</Col>

				<Col className = 'titleRank' sm = { spacing.sm.rank } >
					Rank
				</Col>

				<Col className = 'titleAction' sm = { spacing.sm.action } >
					Action
				</Col>

				<Col className = 'titleDue' sm = { spacing.sm.date } >
					Date
				</Col>

			</Row>

		</Grid>
	);

}; // end container

// ==================================================================

TodoTitleBar.propTypes = {
	spacing: PropTypes.object
};

TodoTitleBar.defaultProps = {
	
};

export default (TodoTitleBar);
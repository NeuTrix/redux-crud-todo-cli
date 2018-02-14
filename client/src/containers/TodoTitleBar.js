// component to display the curret todo list
import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
// import PropTypes from 'prop-types';

// ============================ STYLING ============================

const styleTitle= {
	background: '#006699',
	color: 'lightblue',
	borderRadius: 5,
	marginBottom: 10,
};

// =========================== Container ===========================

const TodoTitleBar = (props) => {

	const spacing = [1, 1, 2, 7, 1] // control spacing of elements

	return (
	
		<Grid >

			<Row className= 'TodoTitleBar' style= { styleTitle }>

				<Col sm = { spacing[0] } >
					<input type='checkbox' checked disabled />
				</Col>

				<Col sm = { spacing[1] } >
					Rank
				</Col>

				<Col sm = { spacing[2] } >
					Due Date
				</Col>

				<Col sm = { spacing[3] } >
					Task
				</Col>

				<Col sm = { spacing[4] } >
					Delete
				</Col>

			</Row>

		</Grid>

	);

}; // end container

// ==================================================================

/*TodoTitleBar.propTypes = {
	// none
};

TodoTitleBar.defaultProps = {
 // none
};*/

export default (TodoTitleBar);
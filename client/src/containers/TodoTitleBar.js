// component to display the curret todo list
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Grid,Row } from 'react-bootstrap';

// ============================ STYLING ============================

const styleTitle= {
	background: '#006699',
	color: 'lightblue',
	borderRadius: 5,
	marginBottom: 10,
};

// =========================== Container ===========================

const TodoTitleBar = (props) => {

	return (
	
		<Grid >

			<Row className= 'TodoTitleBar' style= { styleTitle }>

				<Col sm = { 1 } >
					<input type='checkbox' checked disabled />
				</Col>

				<Col sm = { 1 } >
					Rank
				</Col>

				<Col sm = { 2 } >
					Due Date
				</Col>

				<Col sm = { 7 } >
					Task
				</Col>

				<Col sm = { 1 } >
					Delete
				</Col>

			</Row>

		</Grid>

	);

} // end container

// ==================================================================

TodoTitleBar.propTypes = {
	// none
};

TodoTitleBar.defaultProps = {
 // none
};

export default (TodoTitleBar);
import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

// ========= Functions ========= 

// ========= Component ========= 

const CalendarBtn = (props) => {

	

	return (
		<Col >
			<input 
				type = 'date'  
				onChange= { props.handleChange }
				defaultValue = { props.storedDate } 
				required
			/>
		</Col >
	);

}; //end Container

//============================================================

CalendarBtn.propTypes = {
	id: PropTypes.string.isRequired,
	updateDate: PropTypes.func.isRequired,
	storedDate: PropTypes.string.isRequired
};

CalendarBtn.defaultProps = {
	id: 'pending',
	updateDate: f => f,
	storedDate: '2017-12-31'
};

//============================================================
export default CalendarBtn;
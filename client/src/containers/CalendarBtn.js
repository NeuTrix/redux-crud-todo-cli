// ========= Under construction ========= 

import React from 'react';
import PropTypes from 'prop-types';
// import normalizeDate from '../myFunctions/normalizeDate'
// import { Col, FormControl } from 'react-bootstrap';

const CalendarBtn = (props) => {

	// let _currentDate = normalizeDate(new Date()) // for default view

	// const handleChangeDate = (event) => {
	// 	event.preventDefault();
	// 	// this.props.updateDate(item.id, _date.value);
	// };
	return (
		<div>
		</div>
	);
}; //end Container

// ========= Props ========= 

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

export default CalendarBtn;
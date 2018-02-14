import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Col, FormControl } from 'react-bootstrap';

import normalizeDate from '../myFunctions/normalizeDate'
let _currentDate = normalizeDate(new Date())


const CalendarBtn = (props) => {

	const handleChangeDate = (event) => {
		event.preventDefault();
		// alert("Howdy")
		// this.props.updateDate(item.id, _date.value);
	};

		return (
				<div>
				</div>
		);
}; //end Container

//============================================================

CalendarBtn.propTypes = {
	updateDate: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	storedDate: PropTypes.string.isRequired
};

CalendarBtn.defaultProps = {
	id: 'pending',
	handleChangeDate: f => f,
	storedDate: '2017-12-31'
};

//============================================================
export default CalendarBtn;
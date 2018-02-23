import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const CalendarBtn = (props) => {

	const handleDateChange = (event) => {
		event.preventDefault();
		let newDate = event.target.value;
		props.updateDate(props._id, newDate );
		alert('Update date to... ' + newDate)
	};

	return (
		<FormControl 
			required 
			type = 'date'
			className ='calendarBtn' 
			bsSize = 'sm'
			defaultValue = { props.date.slice(0,10) } 
			onChange = { handleDateChange }
			style = { props.style }
		/> 
	);
}; 

// ========= Props 

CalendarBtn.propTypes = {
	_id: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	updateDate: PropTypes.func.isRequired,
	style: PropTypes.object
};

CalendarBtn.defaultProps = {
		_id: "default",
		date: '2020-11-14',
		updateDate: f => f,
		style: { }
};

export default CalendarBtn;
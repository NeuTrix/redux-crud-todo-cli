// set date for todo items
import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const CalendarBtn = (props) => {

	let _date; // caputure component value

	const handleDateChange = (event) => {
		event.preventDefault();
		props.updateDate(props._id, _date.value );
		props.editTodo(props._id, { date: _date.value });
	};

	return (
		<FormControl 
			bsSize = 'sm'
			className ='calendarBtn' 
			defaultValue = { props.date.slice(0,10) } 
			inputRef =  { (value) => _date = value }
			onChange = { handleDateChange }
			required 
			style = { props.style }
			type = 'date'
		/> 
	);
}; 

CalendarBtn.propTypes = {
	date: PropTypes.string.isRequired,
	editTodo: PropTypes.func.isRequired,
	style: PropTypes.object,
	updateDate: PropTypes.func.isRequired,
	_id: PropTypes.string.isRequired,
};

CalendarBtn.defaultProps = {
	date: '2020-11-14',
	editTodo: f => f,
	style: { },
	updateDate: f => f,
	_id: 'default'
};

export default CalendarBtn;
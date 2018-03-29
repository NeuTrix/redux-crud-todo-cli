// set date for todo items
import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const CalendarBtn = (props) => {

	let _date; // caputure component value

	const handleDateChange = (event) => {
		event.preventDefault();
		props.editTodo(props._id, { date: _date.value });
	};

	return (
		<FormControl 
			className ='calendarBtn' 
			defaultValue = { props.date.slice(0,10) } 
			inputRef =  { (value) => _date = value }
			required 
			style = { props.style }
			type = 'date'
			
			onChange = { handleDateChange }
		/> 
	);
}; 

CalendarBtn.propTypes = {
	_id: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	style: PropTypes.object,
	
	editTodo: PropTypes.func.isRequired,
};

CalendarBtn.defaultProps = {
	date: '2020-11-14',
	editTodo: f => f,
	style: { },
	_id: 'default'
};

export default CalendarBtn;
// sets the date for todo items
import React from 'react';
import PropTypes from 'prop-types';

// +++++++++   +++++++++ 

const CalendarBtn = (props) => {

	let _date;

	const handleDateChange = (event) => {
		event.preventDefault();
		props.editTodo(props._id, { date: _date.value });
	};

	return (
		<input 
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

// +++++++++   +++++++++ 

CalendarBtn.propTypes = {
	_id: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	style: PropTypes.object,
	editTodo: PropTypes.func.isRequired,
};

CalendarBtn.defaultProps = {
	_id: 'default',
	date: '2020-11-14',
	style: { },
	editTodo: f => f,
};

export default CalendarBtn;
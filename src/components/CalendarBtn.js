import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const CalendarBtn = (props) => {

	let _date // caputure component value

	const handleDateChange = (event) => {
		event.preventDefault();
		props.updateDate(props._id, _date.value );
		props.editTodo(props.api, props._id, { date: _date.value })
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

// +++++++++ Props 

CalendarBtn.propTypes = {
	api: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	editTodo: PropTypes.func.isRequired,
	_id: PropTypes.string.isRequired,
	updateDate: PropTypes.func.isRequired,
	style: PropTypes.object
};

CalendarBtn.defaultProps = {
 	api: 'https://redux-todo-api.herokuapp.com/api/todos',
	date: '2020-11-14',
	editTodo: f => f,
	_id: "default",
	updateDate: f => f,
	style: { }
};

export default CalendarBtn;
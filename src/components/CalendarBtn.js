import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl } from 'react-bootstrap';

const CalendarBtn = (props) => {

	const handleDateChange = (event) => {
			event.preventDefault();
			let newDate = event.target.value;
			props.updateDate(props._id, newDate );
			alert('Update date to... ' + newDate)
		};

	return (
		<Form >
			<FormControl 
				required 
				type = 'date'
				className='calendarBtn' 
				bsSize = 'sm'
				defaultValue = { props.date.slice(0,10) } 
				onChange = { handleDateChange }
			/> 
		</Form>
	);
}; 

// ========= Props 

CalendarBtn.propTypes = {
	_id: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	updateDate: PropTypes.func.isRequired
};

CalendarBtn.defaultProps = {
		_id: "default",
		date: '2020-11-14',
		updateDate: f => f
};

export default CalendarBtn;
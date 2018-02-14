import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

//============================================================

const CalendarBtn = (props) => {

	let _date;
	const handleChange = (event) => {
		event.preventDefault();
		props.updateDate(props.id, _date.value);
	};

	let showMeTheDate = props.storedDate

	return (
		<Form >
			<input 
				type = 'date'  
				ref= { (input) => _date = input } 
				onChange= { handleChange }
				defaultValue = { props.storedDate } required
			/>
			<div>
				Here's the date: {showMeTheDate}
			</div>
		</Form >
	);

}; //end Container

//============================================================

CalendarBtn.propTypes = {
	id: PropTypes.string.isRequired,
	updateDate: PropTypes.func.isRequired,
	storedDate: PropTypes.instanceOf(Date),
};

CalendarBtn.defaultProps = {
	id: 'pending',
	updateDate: f => f,
	// storedDate: new Date().toLocaleDateString()
	storedDate: '2018-12-14'
};

//============================================================
export default CalendarBtn;
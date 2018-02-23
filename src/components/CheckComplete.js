import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

const checkStyle ={
	paddingLeft: 10,
};

const CheckComplete = (props) => {

	const handleClick = (event) => {
		// disable event.preventDefault() to allow aninmation
		props.toggleComplete(props._id);
	};
	
	if(props.completed) {
		return( 
			<Checkbox 
				defaultChecked 
				type = 'checkbox' 
				className = { 'form-check-input' }
				style = { checkStyle }
				onClick = { handleClick } > 
			</Checkbox>
		);
	} else {
	
		return (
			<Checkbox 
				type = 'checkbox' 
				className = { 'form-check-input' }
				style = { checkStyle }
				onClick = { handleClick } > 
			</Checkbox>
		);
	} 
};

CheckComplete.propTypes = {
	completed: PropTypes.bool.isRequired,
	_id: PropTypes.string.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

CheckComplete.defaultProps = {
	_id: 'default',
	toggleComplete: f => f,
	completed: false
};

export default CheckComplete;
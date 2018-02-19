import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

const checkStyle ={
	paddingLeft: 10,
};

const _Checkbox = (props) => {

	const handleClick = (event) => {
		// disable event.preventDefault() to allow aninmation
		props.toggleComplete(props.id);
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

_Checkbox.propTypes = {
	complete: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

_Checkbox.defaultProps = {
	id: 'default',
	toggleComplete: f => f,
	complete: false
};

export default _Checkbox;
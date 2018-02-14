import React from 'react';
import PropTypes from 'prop-types';
import { Form, Checkbox } from 'react-bootstrap';

const checkStyle ={
	paddingLeft: 40,
	// backgroundColor: 'orange'
}

const _Checkbox = (props) => {

	const handleClick = (event) => {
		// disable event.preventDefault() to allow aninmation
		props.toggleComplete(props.id);
	};
	
	if(props.completed) {
		return( 
			<Form >
				<Checkbox 
					style = { checkStyle }
					className= { 'form-check-input' }
					type= 'checkbox' 
					onClick= { handleClick }
					defaultChecked
				> 
				</Checkbox>
			</Form>
		);
	} else {
	
		return (
			<Form >
				<Checkbox 
					style = { checkStyle }
					className= { 'form-check-input' }
					type= 'checkbox' 
					onClick= { handleClick }
				> 
				</Checkbox>
			</Form>
		);
	} // end return

}; // end component

_Checkbox.propTypes = {
	complete: PropTypes.bool.isRequired,
	id: PropTypes.string,
	toggleComplete: PropTypes.func.isRequired,
};

_Checkbox.defaultProps = {
	toggleComplete: f => f,
	complete: false
};

export default _Checkbox;
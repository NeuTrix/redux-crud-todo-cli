import React from 'react';
import PropTypes from 'prop-types';
import { Form, Checkbox } from 'react-bootstrap';

const _Checkbox = (props) => {

	const handleClick = (event) => {
		// disable event.preventDefault() to allow aninmation
		props.toggleTodo(props.id);
	};
	
	if(props.completed) {
		return( 
			<Form >
				<Checkbox 
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
	toggleTodo: PropTypes.func.isRequired,
};

_Checkbox.defaultProps = {
	toggleTodo: f => f,
	complete: false
};

export default _Checkbox;
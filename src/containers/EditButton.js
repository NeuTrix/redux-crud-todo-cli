import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

//============================================================

const EditButton = (props) => {

	const handleClick = (event) => {
		event.preventDefault();
		// allow restricted global use of `confirm`
		//eslint-disable-next-line
		let _edited = prompt('Enter Edited task below: ', props.task) 
			
		return props.updateTodo(props.id, _edited);
	};

	return (

		<Button 
			onClick= { handleClick } 
			className= { 'btn btn-primary btn-sm' }
		> 
			Edit
		</Button>
	);
}; //end Container

//============================================================

EditButton.propTypes = {
	updateTodo: PropTypes.func.isRequired,
	id: PropTypes.string,
	task: PropTypes.string, // item.task
};

EditButton.defaultProps = {
	updateTodo: f => f,
};

export default EditButton;
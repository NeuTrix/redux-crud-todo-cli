import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const DeleteBtn = (props) => {

	const handleClick = (event) => {
		event.preventDefault();
		// allow restricted global use of `confirm`
		//eslint-disable-next-line
		let _confirmed = confirm('DELETE this item?') 
			
		if (_confirmed) {
			return props.deleteTodo(props._id);
		} 
	};

	return (
		<Button 
			onClick= { handleClick } 
			className= { 'deleteBtn btn btn-danger btn-sm pull-right' }
		> 
			Delete 
		</Button>
	);
};

DeleteBtn.propTypes = {
	// removeTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	_id: PropTypes.string.isRequired
};

DeleteBtn.defaultProps = {
	_id: 'default',
	deleteTodo: f => f,
	removeTodo: f => f,
};

export default DeleteBtn;
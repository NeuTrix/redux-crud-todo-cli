import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const DeleteBtn = (props) => {

	const handleClick = (event) => {
		let task = props.task
		event.preventDefault();
		// allow restricted global use of `confirm`
		//eslint-disable-next-line
		let _confirmed = confirm(`You are deleting the task : \n\t  "${task}" \n  Are you sure ?` ) 
			
		if (_confirmed) {
			return props.deleteTodo(props.api, props._id);
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
	api: PropTypes.string.isRequired,
	task: PropTypes.string.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	_id: PropTypes.string.isRequired
};

DeleteBtn.defaultProps = {

 	api: 'https://redux-todo-api.herokuapp.com/api/todos',
 	task: "default",
	deleteTodo: f => f,
	_id: 'default',
};

export default DeleteBtn;
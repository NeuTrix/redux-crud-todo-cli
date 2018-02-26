import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Col, FormControl, Row } from 'react-bootstrap';

const TodoTask = (props) => {

	const handleClick = () => {

	};

		return (

			<FormControl 
				className= 'task' 
				onFocus = { handleClick }
				defaultValue= { props.task }
				style = { props.style }
				type = 'text'  
				required
			/> 
		)
};

TodoTask.propTypes = {
	_id: PropTypes.string.isRequired,
	task: PropTypes.string.isRequired,
	updateTask: PropTypes.func.isRequired
};

TodoTask.defaultProps = {
	_id: 'default',
	task: 'default',
	updateTask: f => f
};

export default TodoTask;
import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl } from 'react-bootstrap';

const TodoTask = (props) => {

	let style = props.style

	const taskStyle = {

	}

	/*const handleTaskEdit = (event) => {
		event.preventDefault();
		let newTask = event.target.value;
		props.updateTask(props._id, newTask);
		alert('Update task to... ' + newTask)
	};*/

/*	const validateEditable = (event) => {
		event.preventDefault();
		if(this.state.item.completed === true) {
			return alert('To Edit, uncheck task completed');
		}
	};*/

	const onFocusStyle = (event) => {
		event.preventDefault();
		let task = event.target
		console.log(task)
		task.style.backgroundColor = 'mintCream';
		task.style.color = 'blue';
		task.setSelectionRange(0, task.value.length);
	};

/*	const onBlurStyle = (event) => {
		event.preventDefault();
		taskStyle.backgroundColor = 'white';
		taskStyle.color = 'black';
	};*/

	return (
		<Form 
			onFocus = { onFocusStyle } 
		>
			<FormControl 
				type = 'text'  
				className= 'task' 
				required
				defaultValue= { props.task }
				style= { taskStyle }
				style = { props.style }
			/> 
		</Form> 
	);
}; 

/*
			onClick = { validateEditable }
			onChange = { handleTaskEdit } 
			onBlur = { onBlurStyle } 


*/

// ========= Props 

TodoTask.propTypes = {
	_id: PropTypes.string.isRequired,
	task: PropTypes.string.isRequired,
	updateTask: PropTypes.func.isRequired,
	style: PropTypes.object
};

TodoTask.defaultProps = {
		_id: "default",
		task: 'default task',
		updateTask: f => f,
		style: { }
};

export default TodoTask;
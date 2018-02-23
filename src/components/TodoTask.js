import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl } from 'react-bootstrap';

const TodoTask = (props) => {

	const handleTaskEdit = (event) => {
		event.preventDefault();
		let newTask = event.target.value;
		props.updateTask(props._id, newTask);
		alert('Update task to... ' + newTask)
	};

	const validateEditable = (event) => {
		event.preventDefault();
		if(this.state.item.completed === true) {
			return alert('To Edit, uncheck task completed');
		}
	};

	const onFocusStyle = (event) => {
		event.preventDefault();
		_task.style.backgroundColor = 'whitesmoke';
		_task.style.color = 'blue';
		_task.setSelectionRange(0, _task.value.length);
	};

	const onBlurStyle = (event) => {
		event.preventDefault();
		_task.style.backgroundColor = 'white';
		_task.style.color = 'black';
	};

	return (
		<Form 
			onClick = { validateEditable }
			onChange = { handleTaskEdit } 
			onFocus = { onFocusStyle } 
			onBlur = { onBlurStyle } 
		>
			<FormControl 
				type = 'text'  
				className= 'task' 
				required
				defaultValue= { props.task }
				style = { props.style }
			/> 
		</Form> 
	);
}; 

// ========= Props 

TodoTask.propTypes = {
	_id: PropTypes.string.isRequired,
	task: PropTypes.string.isRequired,
	updateDate: PropTypes.func.isRequired,
	style: PropTypes.object
};

TodoTask.defaultProps = {
		_id: "default",
		task: 'default task',
		updateTask: f => f,
		style: { }
};

export default TodoTask;
import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl } from 'react-bootstrap';

const TodoTask = (props) => {

	const handleTaskEdit = (event) => {
		event.preventDefault();
		let newTask = event.target.value;
		props.updateTask(props._id, newTask);
	};

	const handleClick = (event) => {
		event.preventDefault();
		let taskBox = event.target
		console.log(taskBox)
		taskBox.style.backgroundColor = 'mintCream';
		taskBox.style.color = 'blue';
		taskBox.setSelectionRange(0, taskBox.value.length);
		
		// if(props.item.completed) {
		// 		alert('To Edit, uncheck task completed');
		// 	}
		};

	const onBlurStyle = (event) => {
		if(!props.item.completed) {
				event.preventDefault();
				let newTask = event.target
						newTask.style.backgroundColor = 'white';
						newTask.style.color = 'black';
			};
		};

		return (
			<Form
				onBlur = { onBlurStyle } 
				onClick = { handleClick } 
				onChange = { handleTaskEdit }
			>
				<FormControl 
					type = 'text'  
					className= 'task' 
					required
					defaultValue= { props.item.task }
					style = { props.style }
				/> 
			</Form>
		)
}; 


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
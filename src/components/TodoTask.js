import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl } from 'react-bootstrap';

// ========= 

class TodoTask extends Component {

	constructor (props) {
		super(props)

		this.state = {
			isEditing: false,
			isCompleted: this.props.item.completed,
			_task: this.props.item.task,
			_id: this.props.item._id,
			_style: this.props.item.style
		}
	}


	render () {

// ========= Stlyling

	const isEditingStyle ={
		backgroundColor: 'mintCream',
		color: 'blue',
	}

// ========= Functions

	const handleTaskEdit = (event) => {
		event.preventDefault();
		let newTask = event.target.value;

		this.props.updateTask(this.state._id, newTask);
	};

	const handleFocus = (event) => {
		let taskBox = event.target
		taskBox.setSelectionRange( 0, taskBox.value.length)
	};
/*
	const handleClick = (event) => {
		event.preventDefault();
		let taskBox = event.target
		console.log(taskBox)*/
		
		// 
		// if(props.item.completed) {
		// 		alert('To Edit, uncheck task completed');
		// 	}
		// };

				// onBlur = { onBlurStyle } 
				// onClick = { handleClick } 
				// onChange = { handleTaskEdit }

		let _task = this.props.item.task
		let _style = this.props.item.style

		return (
			<Form 
				onChange = { handleTaskEdit }
				onFocus = { handleFocus}
			>
				<FormControl 
					className= 'task' 
					defaultValue= { _task }
					required
					style = { this.props.style }
					type = 'text'  
				/> 
			</Form>
		)
	}

}; 


// ========= Props 

TodoTask.propTypes = {
	item: PropTypes.object.isRequired,
	style: PropTypes.object,
	updateTask: PropTypes.func.isRequired
};

TodoTask.defaultProps = {
	item: { 
		_id: 'default',
		completed: false,
		details: 'default',
		date: '2018-12-31',
		owner: 'default',
		rank: 'default',
		task: 'default'
	},
		style: { },
		updateTask: f => f,
};

export default TodoTask;
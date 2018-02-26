import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Col, FormControl, Row } from 'react-bootstrap';

// const TodoTask = (props) => {


class TodoTask extends Component {

	constructor (props) {
		super(props)

		this.state = {
			isCompleted: this.props.item.completed,
			style: this.props.style,
			isEditing: false
		}
	}

	componentWillReceiveProps (newProps) {
		console.log('**** newProps ****', newProps)
		this.setState({ 
			style: newProps.style,
			isCompleted: newProps.item.completed 
		})
	}

	render () {

		const isEditingStyle = {
			backgroundColor: this.state.isCompleted ? 'yellow' : 'lime',
			color: 'green'
		}

		
		let status = this.state.isCompleted;

		const handleClick = (event) => {
			event.preventDefault()

			if (status) {
				alert(`Current completed status is ${status}. Please uncheck completed before continuing to edit`);
				this.setState({ style: this.props.style });
			} else {
				this.setState({ style: isEditingStyle });
				this.setState({ isEditing: true });
			}
		}

		const	handleChange = (event) => {
			event.preventDefault()
			let newTask = event.target.value
			this.props.updateTask(this.props.item._id, newTask)
		};

		/*const handleBlur = (event) => {
			event.preventDefault()

			if (!this.state.isCompleted) {
				
			} 

		}*/

		return (

			<FormControl 
				className= 'task' 
				onClick = { handleClick }
				onChange = { handleChange }
				defaultValue= { this.props.item.task }
				style = { this.state.style }
				type = 'text'  
				required
			/> 
		)
	};
};

TodoTask.propTypes = {
	item: PropTypes.object.isRequired,
	style: PropTypes.object.isRequired,
	updateTask: PropTypes.func.isRequired
};

TodoTask.defaultProps = {
	item: {
		_id: 'default',
		task: 'default',
		completed: false
	},
	style: {},
	updateTask: f => f
};

export default TodoTask;
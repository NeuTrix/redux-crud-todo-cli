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

		const handleFocus = (event) => {
			event.preventDefault()
			console.log('FOCUSED!!!')
			// alert('FOCUSED!!!')/

			// if (!this.state.isCompleted) {
				// this.setState({ style: isEditingStyle })
				// this.setState({ isEditing: true })
			// }

		}

	/*	const handleClick (event) {
			event.preventDefault()
			// this.setState({ isEditing: true })
			this.setState({ style: isEditingStyle })
		}*/

		const	handleChange = (event) => {
			event.preventDefault()
			let newTask = event.target.value
			this.props.updateTask(this.props.item._id, newTask)
		};

		return (

			<FormControl 
				className= 'task' 
				
				onChange = { handleChange }
				onFocus = { handleFocus }
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
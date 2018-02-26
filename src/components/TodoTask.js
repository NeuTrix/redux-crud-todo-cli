import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Col, FormControl, Row } from 'react-bootstrap';

// const TodoTask = (props) => {


class TodoTask extends Component {

	constructor (props) {
		super(props)

		this.state = {
			style: this.props.style,
			isCompleted: this.props.item.completed,
			isEditing: false
		}
	}

	componentWillReceiveProps (newProps) {
		// console.log('**** newProps ****', newProps)
		this.setState({ 
			style: newProps.style,
			isCompleted: newProps.item.completed 
		})
	}

	render () {

		let defaultStyle = this.props.style // base style for component
		let status = this.state.isCompleted; // completed status

		const isEditingStyle = {
			backgroundColor: 'aliceBlue',
			color: 'navy'
		}

		const handleClick = (event) => {
			event.preventDefault()

			if (status) {
				alert(`Current completed status is "${status}".\nPlease uncheck "completed" before continuing to edit`);
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

		const handleBlur = (event) => {
			event.preventDefault()
			this.setState({ style: defaultStyle })
		}

		return (

			<FormControl 
				className= 'task' 
				defaultValue= { this.props.item.task }
				style = { this.state.style }
				type = 'text'  
				required

				onClick = { handleClick }
				onChange = { handleChange }
				onBlur =  { handleBlur }
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
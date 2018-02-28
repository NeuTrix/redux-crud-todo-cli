import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

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
			let _task = event.target

			if (status) {
				alert(`Current completed status is "${status}".\nPlease uncheck "completed" before continuing to edit`);
				this.setState({ style: this.props.style });
			} else {
				this.setState({ isEditing: true });
				this.setState({ style: isEditingStyle });
				_task.setSelectionRange(0, _task.value.length)
				
			}
		}
		
		const	handleChange = (event) => {
			event.preventDefault()
			let newTask = event.target.value
			this.props.editTodo(this.props.item._id, newTask)
		};

		const handleBlur = (event) => {
			event.preventDefault()
			this.setState({ style: defaultStyle })
			this.setState({ isEditing: false });
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
	editTodo: PropTypes.func.isRequired
};

TodoTask.defaultProps = {
	item: {
		_id: 'default',
		task: 'default',
		completed: false
	},
	style: {},
	editTodo: f => f
};

export default TodoTask;
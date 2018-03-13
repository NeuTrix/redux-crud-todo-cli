import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';
import shortid from 'shortid'

class TodoTask extends Component {

	constructor (props) {
		super(props);
		this.state = {
			task: this.props.item,
			_id: this.props.item._id,
			defStyle: this.props.style,
			isComplete: this.props.item.completed,
			isEditing: false,
			editStyle: { backgroundColor: 'aliceBlue', color: 'navy'}
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	componentWillReceiveProps (newProps) {
		this.setState({ defStyle: newProps.style, isComplete: newProps.item.completed });
	}

	handleClick (e)  {
		e.preventDefault();
		let { isComplete, isEditing, editStyle, defStyle } = this.state

		if (isComplete) {
			alert(`Current completed status is "${isComplete}".\nPlease uncheck "completed" before continuing to edit`);
			this.setState({ defStyle: this.props.style });
		} else {
			this.setState({ isEditing: true, defStyle: editStyle  });
			e.target.setSelectionRange(0, e.target.value.length);
		}
	};

	handleChange (e)  {
		e.preventDefault();
		console.log(`====> Editing: ${e.target.value}!`)
		// let newt = e.target.value
	};

	 handleBlur (e)  {
	 	let { task } = this.state
		this.props.editTodo(this.props.item._id, { task: task });
		e.preventDefault();
		// this.setState({ defStyle: this.props.style, isEditing: false });
	};

// +++++++++   +++++++++  

	render () {

		return (
			<FormControl 
				className = 'task' 
				name = 'task'
				defaultValue = { this.props.item.task }
				required
				style = { this.state.style }
				type = 'text'  
				onClick = { this.handleClick }
				onChange = { this.handleChange }
				onBlur =  { this.handleBlur }
			/> 
		);
	}
}

TodoTask.propTypes = {
	item: PropTypes.object.isRequired,
	style: PropTypes.object.isRequired,
	editTodo: PropTypes.func.isRequired
};

TodoTask.defaultProps = {
	item: {
		task: 'default from TodoTask.js',
		completed: false
	// _id: `tempTodoTaskId:${shortid.generate()}` ,
	},
	style: {},
	editTodo: f => f,
};

export default TodoTask;
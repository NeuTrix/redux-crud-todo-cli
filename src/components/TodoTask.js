
import React, { Component }  from 'react';
import PropTypes from 'prop-types';

// +++++++++ COMPONENT  +++++++++ 

class TodoTask extends Component {

	constructor (props) {
		super(props);

		this.state = {
			task: this.props.task,
			_id: this.props._id,
		};

		const isComplete = this.state.completed 

		this.style = {
			display: 'grid',
			paddingLeft: '1em',
			backgroundColor: isComplete ?'whitesmoke' : 'orange',
			textDecoration: isComplete ?'line-through': 'none',
			color: isComplete ? '#bbbbbb': 'grey',
		}

		this.handleBlur 	= this.handleBlur.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleEdit 	= this.handleEdit.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

	}

	handleBlur(e) {
		e.preventDefault();
		this.props.editTodo(this.props._id, this.state)
	}

	handleChange(e) {
		e.preventDefault();
		this.setState ({ task: e.target.value })
	}

	handleEdit(e) {
		e.preventDefault();
		if (this.state.completed) {
			alert('Please uncheck `completed` before editing')
		} 
			e.target.setSelectionRange(0, e.target.value.length);
	}

	handleSubmit(e) {
		e.preventDefault ();
		this.props.editTodo (this.props._id, this.state);
	};

	render () {
		// const { task, _id } = this.state;

		return (
			<input 
			style = { this.state.style }
				type = 'text'
				defaultValue = { this.state.task }
				onBlur = { this.handleBlur }
				onChange = { this.handleChange }
				onFocus = { this.handleEdit }
			/>
		);
	}
}

// +++++++++ PROPS +++++++++ 

TodoTask.propTypes = {
	editTodo: PropTypes.func.isRequired,
	_id: PropTypes.string.isRequired,
	task: PropTypes.string.isRequired,
};

TodoTask.defaultProps = {
	editTodo: f => alert('error: TodoTask editTodo fn not rendering'),
};

export default TodoTask;
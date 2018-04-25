
import React, { Component }  from 'react';
import PropTypes from 'prop-types';


// +++++++++   +++++++++ 

class TodoTask extends Component {

	constructor (props) {
		super(props);

		this.state = {
			item: this.props.item,
			task: this.props.item.task,
			_id: this.props.item._id,
			defStyle: this.props.style,
			isComplete: this.props.item.completed,
			isEditing: false,
			editStyle: { backgroundColor: 'aliceBlue', color: 'navy'}
		};

		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps (newProps) {
		this.setState({ defStyle: newProps.style, isComplete: newProps.item.completed });
	}

	handleClick(e) {
		e.preventDefault();
		let { isComplete, editStyle } = this.state;

		if (isComplete) {
			alert(`completed is: "${isComplete}".\nPlease uncheck "completed" before continuing to edit`);
			this.setState({ defStyle: this.props.style });
		} else {
			this.setState({ isEditing: true, defStyle: editStyle  });
		}
	}

	handleChange(e){
		e.preventDefault();
		this.setState({ task: e.target.value });
	}

	handleSubmit(e){
		e.preventDefault();
		const { _id, task} = this.state;
		this.props.editTodo( _id, {task: task});
	}

	handleFocus(e){
		e.preventDefault();
		e.target.setSelectionRange(0, e.target.value.length);
	}

	handleBlur(e){
		e.preventDefault();
		const { _id, task} = this.state;
		this.props.editTodo( _id, {task: task});
	}
	
	render () {
		
		return (
			<input 
				type = 'text'
				defaultValue = { this.state.task }
				onBlur = { this.handleBlur }
				onChange = { this.handleChange }
				onFocus = { this.handleEdit }
			/>
		);
	}
}

// +++++++++   +++++++++ 

TodoTask.propTypes = {
	deleteTodo: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
	style: PropTypes.object.isRequired,
};

TodoTask.defaultProps = {
	deleteTodo: f => f,
	item: {
		task: 'default from TodoTask.js',
		completed: false
	},
	style: {},
};

export default TodoTask;
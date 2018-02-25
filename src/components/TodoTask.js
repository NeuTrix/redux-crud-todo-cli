import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

// ========= Stlyling

const defaultStyle = {
	backgroundColor: 'white', 
	color: 'black' 
}

const isEditingStyle = {
	backgroundColor: 'yellow', 
	color: 'blue' 
}

const isCompletedStyle = {
		marginBottom: 10,
		backgroundColor: 'whitesmoke', 
		color: 'lightgrey',
		textDecoration: 'line-through' 
}

// ========= Component

class TodoTask extends Component {

	constructor (props) {
		super(props)

		this.state = {
			isEditing: false,
			isCompleted: this.props.item.completed,
			_style: defaultStyle
		}
	}

	componentWillMount() {
		if (this.state.isCompleted) {
		 this.setState({_style: isCompletedStyle })
		} 
	}

	shouldComponentUpdate (nextProps) {
		console.log(nextProps.item)
		this.props.item.completed === nextProps.item.completed ?
		 false :  true
	}

	render () {
	
		const handleFocus = (event) => {
			event.preventDefault();

			if (!this.state.isCompleted) {
				event.target.setSelectionRange( 0, event.target.value.length)
				this.setState({ _style: isEditingStyle })
				this.setState({ isEditing: true })
			} console.log('????')

		};

		const handleClick = (event) => {
			event.preventDefault();
			if (this.state.isCompleted) {
				alert('Item is completed');
				this.setState ({ _style: isCompletedStyle }); 
			}
				this.setState ({ _style: isEditingStyle });
		}

		const handleChange = (event) => {
			event.preventDefault();
			let newTask = event.target.value;
			this.props.updateTask(this.props._id, newTask);
		};

		const handleBlur = (event) => {
			event.preventDefault();
			this.state.isCompleted ?
			  this.setState({ _style: isCompletedStyle }) :
				this.setState({ _style: defaultStyle })
			this.setState({ isEditing: false })
		};

		return (
			<FormControl 
				onClick = { handleClick }
				onFocus = { handleFocus }
				onChange = { handleChange }
				onBlur =  { handleBlur }

				className= 'task' 
				defaultValue= { this.props.item.task }
				required
				style = { this.state._style }
				type = 'text'  
			/> 
		) //return
	}; //render
}; //component

// ========= Props 

TodoTask.propTypes = {
	item: PropTypes.object.isRequired,
	updateTask: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired
};

TodoTask.defaultProps = {
	item: { 
		completed: false,
		task: 'default'
	},
	updateTask: f => f,
	toggleComplete: f => f // action creator
};

export default TodoTask;
import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Col, FormControl, Row } from 'react-bootstrap';

// const TodoTask = (props) => {
class TodoTask extends Component {

	constructor (props) {
		super(props)

		this.state = {
			style: this.props.style,
		}
	}


	handleClick (e) {
		e.preventDefault()
		let newTask = e.target.value
		this.props.updateTask(this.props._id, newTask)
	};

	render () {

		return (

			<FormControl 
				className= 'task' 
				onChange = { this.handleClick.bind(this) }
				defaultValue= { this.props.task }
				style = { this.props.style }
				type = 'text'  
				required
			/> 
		)
	};
};

TodoTask.propTypes = {
	_id: PropTypes.string.isRequired,
	task: PropTypes.string.isRequired,
	updateTask: PropTypes.func.isRequired
};

TodoTask.defaultProps = {
	_id: 'default',
	task: 'default',
	updateTask: f => f
};

export default TodoTask;
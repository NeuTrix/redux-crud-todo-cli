import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

const checkStyle ={
	paddingLeft: 10,
};

class CheckComplete extends Component {
			
	constructor (props) {
		super (props);
		this.state = {
			isChecked: this.props.completed
		};
	}

	componentWillReceiveProps (newProps) {
		this.setState({ 
			isChecked: newProps.completed,
		});
	}

	render() {

		const handleToggle = (event) => {
			// do not preventDefault- preserves animation
			this.props.toggleComplete(this.props._id);
			this.props.editTodo(
				this.props.api, 
				this.props._id, 
				{ completed: !this.state.isChecked }
			);
		};

		return( 
			<Checkbox 
				className = 'checkComplete'
				defaultChecked = { this.props.completed }
				type = 'checkbox' 
				style = { checkStyle }
				onClick = { handleToggle } 
			> 
			</Checkbox>
		);
	}
}

CheckComplete.propTypes = {
	api: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	editTodo: PropTypes.func.isRequired,
	_id: PropTypes.string.isRequired,
	toggleComplete: PropTypes.func.isRequired
};

CheckComplete.defaultProps = {
 	api: 'https://redux-todo-api.herokuapp.com/api/todos',
	completed: false,
	editTodo: f => f,
	toggleComplete: f => f,
	_id: 'default' ,
};

export default CheckComplete;
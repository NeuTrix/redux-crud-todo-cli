import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

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
			this.props.editTodo ( 
				this.props._id, 
				{ completed: !this.state.isChecked }
			);
		};

		return (  
			<Checkbox 
				className = 'checkComplete'
				defaultChecked = { this.props.completed }
				type = 'checkbox' 
				onClick = { handleToggle } 
			> 
			</Checkbox>
		);
	}
}

CheckComplete.propTypes = {
	completed: PropTypes.bool.isRequired,
	editTodo: PropTypes.func.isRequired,
	_id: PropTypes.string.isRequired,
	toggleComplete: PropTypes.func.isRequired
};

CheckComplete.defaultProps = {
	completed: false,
	editTodo: f => f,
	_id: 'default' ,
	toggleComplete: f => f,
};

export default CheckComplete;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

const checkStyle ={
	paddingLeft: 10,
};

class CheckComplete extends Component {
			
	constructor (props) {
		super (props)
		this.state = {
			isChecked: this.props.completed
		}
	}

	componentWillMount () {
		this.props.completed ? 
			this.setState ({ isChecked: true }) :
			this.setState ({ isChecked: false })
	}

	render () {

		const handleToggle = (event) => {
			// disable event.preventDefault() to allow aninmation
			// event.preventDefault() 

			// this.setState ({ isCompleted: !this.state.isCompleted })
			this.props.toggleComplete(this.props._id);
		};

		return( 
			<Checkbox 
				className = 'checkComplete'
				defaultChecked = { this.state.isChecked }
				type = 'checkbox' 
				style = { checkStyle }
				onClick = { handleToggle } 
			> 
			</Checkbox>
		);
	}
};

CheckComplete.propTypes = {
	_id: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	toggleComplete: PropTypes.func.isRequired
};

CheckComplete.defaultProps = {
	completed: false,
	_id: "default" ,
	toggleComplete: f => f
};

export default CheckComplete;
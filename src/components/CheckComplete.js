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
			isChecked: false
		}
	}

	componentWillMount () {
		this.props.completed ? 
			this.setState ({ isChecked: true }) :
			this.setState ({ isChecked: false })
	}

	render () {
		
		return( 
			<Checkbox 
				className = 'checkComplete'
				defaultChecked = { this.state.isChecked }
				type = 'checkbox' 
				style = { checkStyle }
			> 
			</Checkbox>
		);
	}
};

CheckComplete.propTypes = {
	completed: PropTypes.bool.isRequired,
};

CheckComplete.defaultProps = {
	completed: false,
};

export default CheckComplete;
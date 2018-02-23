import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

const checkStyle ={
	paddingLeft: 10,
};

class CheckComplete extends Component {

	constructor (props) {
		super(props)
		this.state ={
			_complete: props.item.completed
		}
	}

	const handleClick = (event) => {
		// disable event.preventDefault() to allow aninmation
		props.toggleComplete(props._id);
	};
	
	if(props.item.completed) {
		return( 
			<Checkbox 
				className = 'checkComplete'
				defaultChecked 
				type = 'checkbox' 
				style = { checkStyle }
				onClick = { handleClick } > 
			</Checkbox>
		);
	} else {
	
		return (
			<Checkbox 
				className = 'checkComplete'
				type = 'checkbox' 
				style = { checkStyle }
				onClick = { handleClick } > 
			</Checkbox>
		);
	} 
};

CheckComplete.propTypes = {
	_id: PropTypes.string.isRequired,
	item: PropTypes.object.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

CheckComplete.defaultProps = {
	_id: 'default',
	item: { },
	toggleComplete: f => f
};

export default CheckComplete;
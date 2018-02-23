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
			_completed: this.props._completed,
			isChecked: true
		}
	}

	componentWillMount () {
		this.state._completed ? 
			this.setState ({ isChecked: true }) :
			this.setState ({ isChecked: false })
	}

	/*componentWillReceiveProps (nextProps) {
		// let isChecked = this.state.isChecked
		this.setState ({ item: nextProps.item });

		this.state._completed ? 
			this.setState ({ isChecked: true }) :
			this.setState ({ isChecked: false }); 
	}*/

	render () {

		const handleClick = (event) => {
			// disable event.preventDefault() to allow aninmation
			this.props.toggleComplete(this.props._id);
		};
		
		return( 
			<Checkbox 
				className = 'checkComplete'
				defaultChecked = { this.state.isChecked }
				type = 'checkbox' 
				style = { checkStyle }
				onClick = { handleClick } > 
			</Checkbox>
		);
	}
};

CheckComplete.propTypes = {
	_id: PropTypes.string.isRequired,
	_completed: PropTypes.bool.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

CheckComplete.defaultProps = {
	_id: 'default',
	_completed: true,
	toggleComplete: f => f
};

export default CheckComplete;
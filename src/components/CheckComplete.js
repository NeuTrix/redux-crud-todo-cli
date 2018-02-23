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
			_completed: this.props.item.completed,
			_defaultChecked: ""
		}
	}

	componentWillMount() {
		this.state._completed ? 
			this.setState({_defaultChecked: true}) :
			this.setState({_defaultChecked: false}) ;
	}

	componentWillReceiveProps(nextProps) {
		let _defaultChecked = this.state._defaultChecked
		this.setState({ item: nextProps.item });
		this.state._completed ? 
			this.setState({_defaultChecked: true}) :
			this.setState({_defaultChecked: false}) ;
	}

	render () {

		const handleClick = (event) => {
			// disable event.preventDefault() to allow aninmation
			this.props.toggleComplete(this.props._id);
		};
		
		return( 
			<Checkbox 
				className = 'checkComplete'
				defaultChecked = { this.state._defaultChecked }
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
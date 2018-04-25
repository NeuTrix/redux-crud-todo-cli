import React, { Component } from 'react';
import PropTypes from 'prop-types';

// +++++++++ CSS +++++++++ 

const style = {
	basic: { 
		display: 'flex', 
		justifySelf: 'left', 
		alignSelf: 'center' ,
	},

	glyph: { 
		display: 'flex',
		text:"red",
		color: 'steelblue',  
		fontSize: '1.5em' ,
		justifySelf: 'left', 
		alignSelf: 'center' 
	}, 
};

// +++++++++ COMPONENT +++++++++ 

class CheckComplete extends Component {
			
	constructor (props) {
		super (props);
		this.state = { completed: this.props.completed };
		this.handleToggle = this.handleToggle.bind(this)
	}

	// componentWillReceiveProps (newProps) {
	// 	this.setState({ completed: newProps.completed });
	// }

	handleToggle (e) {
		e.preventDefault();
		this.props.editTodo ( 
			this.props._id, 
			{ completed: ! this.state.completed }
		);
	};

	render() {
		const checked = ( 
			<i className = "fa fa-check-square-o fa-lg" style = { style.glyph }> </i>
		);
		
		const unchecked = ( 
			<i className = "fa fa-square-o fa-lg" style = { style.glyph }> </i>
		);

		return (  
			<div className = 'checkComplete'
				onClick = { this.handleToggle } 
				style = { style.basic }
			> { this.state.completed ? checked : unchecked }
			</div>
		);
	}
}

// +++++++++ PROPS +++++++++ 

CheckComplete.propTypes = {
	_id: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	editTodo: PropTypes.func.isRequired,
};

CheckComplete.defaultProps = {
	_id : '',
	completed: false,
	editTodo: f => alert('default: check `CheckComplete` status'),
};

export default CheckComplete;
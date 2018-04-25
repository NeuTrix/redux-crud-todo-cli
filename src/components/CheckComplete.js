import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Glyphicon } from 'react-bootstrap';

const style = {
	display: 'flex',
	color: 'steelblue',
	fontSize: '1.25em',
	justifySelf: 'left',
	alignSelf: 'center',
};

// +++++++++   +++++++++ 

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

		const handleToggle = (e) => {
			e.preventDefault();
			this.props.editTodo ( 
				this.props._id, 
				{ completed: !this.state.isChecked }
			);
		};

		const checked = ( 
			<Glyphicon style = { style } glyph = 'check' /> 
		);
		
		const unchecked = ( 
			<Glyphicon style = { style } glyph = 'unchecked' /> 
		);

		return (  
			<Col 
				className = 'checkComplete'
				defaultChecked = { this.props.completed }
				onClick = { handleToggle } 
				style = { style }
			> 
				{ this.state.isChecked ? checked : unchecked }
			</Col>
		);
	}
}

// +++++++++   +++++++++ 

CheckComplete.propTypes = {
	_id: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	editTodo: PropTypes.func.isRequired,
};

CheckComplete.defaultProps = {
	_id: 'default' ,
	completed: false,
	editTodo: f => f,
};

export default CheckComplete;
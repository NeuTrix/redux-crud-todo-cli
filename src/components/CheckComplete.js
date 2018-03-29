import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Glyphicon } from 'react-bootstrap';

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
			this.props.editTodo ( 
				this.props._id, 
				{ completed: !this.state.isChecked }
			);
		};

		const style = {
			paddingTop: 3,
			color: 'steelblue',
			fontSize: '1.5em',
		}

		const checked = ( 
			<Glyphicon style = { style } glyph = 'check' /> 
		)
		
		const unchecked = ( 
			<Glyphicon style = { style } glyph = 'unchecked' /> 
		)

		return (  

			<Col 
				className = 'checkComplete'
				defaultChecked = { this.props.completed }
				onClick = { handleToggle } 
				style = { { textAlign: 'right' }}
			> 
				{ this.state.isChecked ? checked : unchecked }
			</Col>
		);
	}
}

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
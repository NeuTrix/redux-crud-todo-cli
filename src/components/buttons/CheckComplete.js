import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// +++++++++ CSS +++++++++ 

const Glyph_ = styled.i `
	display: flex;
	text:"red";
	color: steelblue;  
	font-size: 1.5em ;
	justify-self: center; 
	align-self: center;
`;

// +++++++++ COMPONENT +++++++++ 

class CheckComplete extends Component {
			
	constructor (props) {
		super (props);
		this.state = { completed: this.props.completed };
		this.handleToggle = this.handleToggle.bind(this)
	}

	handleToggle (e) {
		e.preventDefault();
		this.props.editTodo ( 
			this.props._id, 
			{ completed: ! this.state.completed }
		);
	};

	render() {
		const checked = ( 
				<Glyph_ className = 'engr ctr fa fa-check-square-o fa-lg'/>
		);
		
		const unchecked = ( 
				<Glyph_ className = "engr ctr fa fa-square-o fa-lg"/>
		);

		return (  
			<div 
				className= {`${this.props.className} ctr`} 
				onClick = { this.handleToggle } 
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
	_id: '',
	completed: false,
	editTodo: f => alert('error: CheckComplete default fn'),
};

export default CheckComplete;
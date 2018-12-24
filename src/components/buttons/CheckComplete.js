import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// +++++++++ CSS +++++++++

const Glyph = styled.i`
	color: #00cc00;  
`;

// +++++++++ COMPONENT +++++++++

class CheckComplete extends Component {

	constructor(props) {
		super(props);
		this.state = { completed: this.props.completed };
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(e) {
		e.preventDefault();

		this.props.editTodo(
			this.props._id,
			{ completed: !this.state.completed },
		);
	}

	render() {
		const checked = (
			<Glyph className="engr ctr fa fa-check-square-o fa-2x" />
		);

		const unchecked = (
			<Glyph className="engr ctr fa fa-square-o fa-2x" />
		);

		return (
			<div
				className={`${this.props.className} ctr`}
				onClick={this.handleToggle}
			>
				{' '}
				{ this.state.completed ? checked : unchecked }
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

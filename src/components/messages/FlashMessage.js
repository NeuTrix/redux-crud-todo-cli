import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../helpers/cssConstants';

const propTypes = {
	message: PropTypes.object.isRequired,
	deleteFlashMessage: PropTypes.func.isRequired,
};

const Flash = styled.div`
	display: grid;
	grid-template-areas: "message clear";
	grid-template-columns: 9fr 1fr;
	margin-top: 10px;
	font-size: 1em;
	border: 1px solid grey;
	padding: 10px;
	border-radius: 5px;
	height: 100px;
	width: 300px;
	opacity: .95;
	// z-index: -10;
	
	animation: fadein 1s;
	@keyframes fadein {
		from {opacity: 0;}
		to {opacity: 1;}
	}

	&:hover {
		background-color: whitesmoke;
		color: darkgrey;
		border: 1px solid black;
		transition: 5s;

		animation: fade-out 5s;
			@keyframes fade-out {
				from {opacity: 1.0;}
				to {opacity: 0.4;}
			}
	}
		
	${({ type }) => (type === 'success' ? ` 
			background: greenyellow ;
			color: ${colors._mintgreen} ;
			border-color: ${colors._mintgreen} ;
		` : type === 'error' ? ` 
			color: red;
			border-color: red;
			background: ${colors._pinkrose} ;
		` : type === 'info' ? ` 
			color: ${colors._deepblue} ;
			border-color: ${colors._deepblue} ;
			background: aliceblue;
		` : type === 'warning' ? ` 
			color: darkgoldenrod;
			border-color: darkgoldenrod;
			background: lightgoldenrodyellow;
		` : 'color: grey')
}
`;

const Message = styled.div`
	grid-area: message; 
	display: inherit; 
	place-content: center; 
	`;

const Clear = styled.div`
	grid-area: clear;
	place-content: center; 
	height: auto; 
	width: auto; 
	display: inherit; 
	border: none;
	font-size: 1.25em
`;

// COMPONENT
class FlashMessage extends Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.closeMessage = this.closeMessage.bind(this);
	}

	closeMessage() {
		return this.props.deleteFlashMessage(this.props.message._id);
	}

	onClick(e) {
		e.preventDefault();
		setTimeout(this.closeMessage(), 750);
	}


	render() {
		const { type, text } = this.props.message;

		setTimeout(this.closeMessage, 100000);

		return (

			<Flash
				className="FlashMessage paper"
				type={type}
			>
				<Message>
					{text}
				</Message>
				<Clear
					className="close btn fa fa-times"
					onClick={this.onClick}
				/>
			</Flash>
		);
	}
}

FlashMessage.propTypes = propTypes;

export default FlashMessage;

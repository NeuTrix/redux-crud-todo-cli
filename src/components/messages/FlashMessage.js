import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../helpers/cssConstants'

// CSS
const Flash = styled.div `
	display: grid;
	grid-template-areas: "message clear";
	grid-template-columns: 9fr 1fr;
	margin-top: 10px;
	font-size: 1em;
	border: 2px solid grey;
	padding: 4px;
	border-radius: 5px;

	${ ({ type }) => 
		type === 'success' ? ` 
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
		` : `color: grey`
}
`;

const Message = styled.div `
	grid-area: message;
	background: transparent;
	height: auto;
	display: inherit;
	place-content: center;
	`;

const Clear = styled.div `
	grid-area: clear;
	place-content: center;
	height: auto;
	width: auto;
	display: inherit;
	border: none;
	font-size: 1.5em
`;

// COMPONENT
class FlashMessage extends Component {

	constructor (props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.closeMessage = this.closeMessage.bind(this);
	}

	closeMessage() {
		return this.props.deleteFlashMessage(this.props.message._id);
	}

	onClick (e) {
		e.preventDefault();
		return	this.props.deleteFlashMessage(this.props.message._id);
	}

	render () {

		const { type, text } = this.props.message;
		
		setTimeout(this.closeMessage, 7000);

		return (
			
			<Flash 
				className = 'FlashMessage paper' 
				type= { type }
			>
				<Message
				> { text } </Message>
				<Clear 
					className= 'close btn fa fa-times' 
					onClick= { this.onClick }
				/>
    	</Flash>
		);
	}
}

FlashMessage.propTypes = {
	message: PropTypes.object.isRequired,
	deleteFlashMessage: PropTypes.func.isRequired
};

FlashMessage.defaultProps = {
	deleteFlashMessage: f => alert('Default fn: deleteFlashMessage')
};

export default FlashMessage;


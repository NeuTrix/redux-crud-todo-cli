import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, media } from '../../helpers/cssConstants'

// CSS

const Flash = styled.div `
	display: grid;
	grid-template-areas: "message clear";
	grid-template-columns: 9fr 1fr;
	margin-top: 10px;
	background: ${colors._pinkrose} ;
	color: red;
	font-size: 1em;
	border: 2px solid grey;
	padding: 4px;
	border-radius: 5px;

	${ ({ type }) => 
		type === 'success' ?  ` 
			background-color: lightgreen ;
			color: ${colors._mintgreen} ;
			border-color: ${colors._mintgreen} ;
		` : type === 'error' ?  ` 
			color: tomato;
			border-color: tomato;
			background-color: #fbd5cf;
		` : type === 'info' ?  ` 
		background-color: ${colors._deepblue} 
		` : type === 'warning' ?  ` 
			background-color: red 
		` : ` color: steelblue `
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
		this.props.deleteFlashMessage(this.props.message._id);
	}

	render () {
		const { type, text } = this.props.message;
		
		const style = {
			display: 'grid',
			gridTemplateArea: '"msg btn"',
			gridTemplateColumns: '9fr 1fr',

			border: '1px solid grey',
			borderRadius: 5,

			background: 
				type === 'success' ? 'palegreen' : 
					type === 'warning' ? 'peach' :
						type === 'info' ? 'aliceblue' :
							type === 'error' ? 'pink' : 'lightgrey',
		};
		
		setTimeout(this.closeMessage, 1999997000);

		return (
			
			<Flash 
				className = 'FlashMessage paper' 
				type= { this.props.message.type}
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
	message: {type: 'info'},
	// message: {type: 'warning'},
	// message: {type: 'info'},
	// message: {type: 'success'},
	// message: PropTypes.object.isRequired,
	deleteFlashMessage: PropTypes.func.isRequired
};

FlashMessage.defaultProps = {
	deleteFlashMessage: f => alert('Default fn: deleteFlashMessage')
};

export default FlashMessage;


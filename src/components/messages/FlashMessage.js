import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// CSS

const Flash = styled.div `
	display: grid;
	grid-template-areas: "message clear"
`;

const Message = styled.button `
	grid-area: message;
	background-color: orange;
`;

const Clear = styled.button `
	grid-area: clear;
	background: lime;
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
			>
				<Message> { text } </Message>
				<Clear 
					className= 'close btn fa fa-times fa-lg' 
					onClick= { this.onClick }
				/>
    	</Flash>
		);
	}
}

FlashMessage.propTypes = {
	test: 'true',
	message: PropTypes.object.isRequired,
	deleteFlashMessage: PropTypes.func.isRequired
};

FlashMessage.defaultProps = {
	deleteFlashMessage: f => alert('Default fn: deleteFlashMessage')
};

export default FlashMessage;


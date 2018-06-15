import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../helpers/cssConstants';
// CSS
const Flash = styled.div `
	display: grid;
	grid-template-areas: "message clear";
	grid-template-columns: 9fr 1fr;
	margin-top: 10px;
	padding: 4px;
	z-index: -10;
	place-content: center;
	height: auto;
	width: auto;
	border-width: 1px 
	border-radius: 3px;
	
	animation: fadein 1s;
	@keyframes fadein {
		from {opacity: 0;}
		to {opacity: 1;}
	}

	&:hover {
		background-color: whitesmoke;
		color: darkgrey;
		border: 2px solid black;
		transition: 0.5s;
	}

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
		` : 'color: grey'
}
`;
const Message = styled.div `grid-area: message;`;

const Clear = styled.div `
grid-area: clear;
display: inherit;
border: none;
font-size: 1.5em
`;
// COMPONENT
export default function FlashMessage(props) {
	const { _id, text, type } = props.message;
	const closeMessage = () => {
		return props.deleteFlashMessage (_id);
	};
	const onClick = (e) => {
		e.preventDefault();
		return closeMessage();
	}; 
	setTimeout(closeMessage, 7000);

	return (
		<Flash 
			className= 'FlashMessage paper' 
			type= { type }
			onClick= {onClick}
		>
			<Message className= 'Message' > { text } </Message>
			< Clear className= ' Clear close btn fa fa-ties'/>
		</Flash>
	);
}


FlashMessage.propTypes = {
	message: PropTypes.object.isRequired,
	deleteFlashMessage: PropTypes.func.isRequired
};

FlashMessage.defaultProps = {
	deleteFlashMessage: f => alert('Default fn: deleteFlashMessage')
};
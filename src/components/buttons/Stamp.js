import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Stamp = (props) => {

	const Button = styled.button`
		grid-area: ${props.area};
		color: ${props.color};
		border: 2px solid ${props.color};
		background-color: ${props.bgColor};
		height: 65px;
		width: 80px;
		opacity: .6;
		justify-self: center;
	`;

	return (
		<Button className= { `${ props.className } box ctr mat` } >
			{ props.name } 
		</Button>  
	)
}

Stamp.propTypes = {
	bgColor: PropTypes.string, // define the background color
	color: PropTypes.string, // define the color theme
	name: PropTypes.string.isRequired, // used for display
	area: PropTypes.string, // grid area to target
}

Stamp.defaultProps = {
	bgColor: 'white',
	color: 'darkgrey',
}

export default Stamp
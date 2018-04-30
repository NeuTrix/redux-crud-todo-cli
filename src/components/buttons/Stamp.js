import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Stamp = (props) => {

	const Button = styled.button`
		grid-area: ${props.area};
		color: ${props.color};
		border-color: ${props.color};
		background-color: ${props.bgColor};
		font-size: ${props.fsize};
		height: 75px;
		width: 80px;
		opacity: .6;
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
}

Stamp.defaultProps = {
	bgColor: 'white',
	color: 'darkgrey',
}

export default Stamp
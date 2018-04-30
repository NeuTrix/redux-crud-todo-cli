import React from 'react';
import PropTypes from 'prop-types';

const BasicButton = ({ bgColor, color, name }) => {

	const style = {
		color,
		borderColor: color,
		backgroundColor: bgColor,
	}

	return (
		<button className= 'btn mat opac' style= { style } >
			{ name }
		</button>  
	)
}

BasicButton.propTypes = {
	color: PropTypes.string, // indicates link color
	bgColor: PropTypes.string, // indicates link color
	name: PropTypes.string.isRequired, // altenative name for
}

BasicButton.defaultProps = {
	name: 'Name Me!'
}

export default BasicButton
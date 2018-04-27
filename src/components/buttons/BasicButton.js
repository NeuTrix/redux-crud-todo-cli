import React from 'react';
import PropTypes from 'prop-types';

const BasicButton = ({ area, bgColor, color, name }) => {

	const style = {
		gridArea: area,
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
	area: PropTypes.string, // indicates grid area
	color: PropTypes.string, // indicates link color
	bgColor: PropTypes.string, // indicates link color
	name: PropTypes.string.isRequired, // altenative name for
}

BasicButton.defaultProps = {
	name: 'Name Me!'
}

export default BasicButton
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BasicButton = ({ area, bgColor, color, name }) => {

	const style = {
		gridArea: area,
		color,
		borderColor: color,
		backgroundColor: bgColor,
	}

	return (
		<button className= 'button mat' style= { style } >
			{ name }
		</button>  
	)
}

BasicButton.propTypes = {
	area: PropTypes.string.isRequired, // indicates grid area
	color: PropTypes.string, // indicates link color
	bgColor: PropTypes.string, // indicates link color
	name: PropTypes.string.isRequired, // altenative name for
}

BasicButton.defaultProps = {
	name: 'Name Me!'
}

export default BasicButton
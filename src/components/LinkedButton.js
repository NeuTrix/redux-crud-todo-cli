import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkedButton = ({ area, bgColor, color, name, path }) => {

	const style = {
		gridArea: area,
		color,
		borderColor: color,
		backgroundColor: bgColor,
	}

	return (
		<Link to = { path } style = {{ gridArea: area }} >
			<button className= 'button mat' style= { style } >
				{ name }
			</button>  
		</Link >
	)
}

LinkedButton.propTypes = {
	area: PropTypes.string, // indicates grid area
	bgColor: PropTypes.string, // indicates grid bgColor
	color: PropTypes.string, // indicates grid color
	name: PropTypes.string.isRequired, // altenative name for
	path: PropTypes.string.isRequired, // indicates link path
}

LinkedButton.defaultProps = {
	name: 'Log in',
	path: '#',
}

export default LinkedButton
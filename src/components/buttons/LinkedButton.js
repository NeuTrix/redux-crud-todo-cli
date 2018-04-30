import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkedButton = ({ className, bgColor, color, name, path }) => {

	const style = {
		color,
		borderColor: color,
		backgroundColor: bgColor,
	}

	return (
		<Link className= { `${ className }` } to = { path } >
			<button className= {`btn mat opac`} style= { style } >
				{ name }
			</button>  
		</Link >
	)
}

LinkedButton.propTypes = {
	bgColor: PropTypes.string, // indicates grid bgColor
	color: PropTypes.string, // indicates grid color
	name: PropTypes.string.isRequired, // altenative name for
	path: PropTypes.string.isRequired, // indicates link path
}

LinkedButton.defaultProps = {
	name: 'Name Me!',
	path: '#',
}

export default LinkedButton
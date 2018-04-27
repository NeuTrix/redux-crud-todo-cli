import React from 'react';
import PropTypes from 'prop-types';

const Stamp = (props) => {

	const style = {
		gridArea: props.area,
		color: props.color,
		borderColor: props.color,
		backgroundColor: props.bgColor,
		fontSize: props.fsize,
		height: props.h,
		width: props.w,
		opacity: .6,
	}

	return (
		<button className= 'box ctr mat ' style = { style } >
			{ props.name } 
		</button>  
	)
}

Stamp.propTypes = {
	area: PropTypes.string, // identify grid layout area
	bgColor: PropTypes.string, // define the background color
	color: PropTypes.string, // define the color theme
	fsize: PropTypes.string, // define the size of the font for name
	h: PropTypes.number, // define the height
	w: PropTypes.number, // define the width
	name: PropTypes.string.isRequired, // used for display
}

Stamp.defaultProps = {
	bgColor: 'white',
	fsize: '1.0em',
	h: 75,
	w: 80,
}

export default Stamp
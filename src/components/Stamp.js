import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// +++++++++ COMPONENT  +++++++++ 

const Stamp = (props) => {

	const style = {
		gridArea: props.area,
		color: props.color,
		borderColor: props.color,
		backgroundColor: props.bgColor,
		fontSize: props.fsize,
		height: props.h,
		width: props.w,
	}

	return (
		<button className= 'stamp box material' style = { style } >
			{ props.name } 
		</button>  
		)
}

// +++++++++  PROPS  +++++++++ 

Stamp.propTypes = {
	area: PropTypes.string.isRequired, // identify grid layout area
	bgColor: PropTypes.string, // define the background color
	color: PropTypes.string, // define the color theme
	fsize: PropTypes.string, // define the size of the font for name
	h: PropTypes.string, // define the height
	w: PropTypes.string, // define the width
	name: PropTypes.string.isRequired, // used for display
}

Stamp.defaultProps = {
	bgColor: 'white',
	fsize: '1.0em',
	h: 80,
	w: 85,
}



export default Stamp
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RegisterButton = ({ area, name, color }) => {

	const style = {
		color,
		borderColor: color,
	}

	return (
		<Link to = '/register' style = {{ gridArea: area }} >
			<button className= 'stamp box material' style = { style } >
				<h4> { name } </h4>
			</button>  
		</Link >
		)
}

RegisterButton.propTypes = {
	area: PropTypes.string.isRequired, // identify grid layout area
	color: PropTypes.string.isRequired, // define the color theme
	name: PropTypes.string.isRequired, // used for display
}

export default RegisterButton
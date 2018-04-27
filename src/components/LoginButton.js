import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const style = { 
	
	backgroundColor: 'lightgreen', 
	borderColor: 'green',
	color: 'green',
}

const LoginButton = ({ area }) => {
	return (
		<Link to = '/login' style = {{ gridArea: area }} >
			<button className= 'button material' style= { style } >
				Login
			</button>  
		</Link >
		)
}

LoginButton.propTypes = {
	area: PropTypes.string.isRequired
}

export default LoginButton
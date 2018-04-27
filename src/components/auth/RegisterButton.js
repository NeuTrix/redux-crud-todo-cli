import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const style = { 
	backgroundColor: 'lightblue',
	borderColor: 'steelblue',
	color: 'steelblue',
}

const RegisterButton = ({ area }) => {
	return (
		<Link to = '/register' style = {{ gridArea: area }} >
			<button className = 'button ctr mat' style = { style } >
				Register
			</button>  
		</Link >
	)
}

RegisterButton.propTypes = {
	area: PropTypes.string.isRequired
}

export default RegisterButton
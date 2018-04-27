import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const style = { 
	backgroundColor: 'lightblue',
	borderColor: 'steelblue',
	color: 'steelblue',
}

const RegisterButton = ({ area, path }) => {
	return (
		<Link to = { path } style = {{ gridArea: area }} >
			<button className = 'button ctr mat' style = { style } >
				Register
			</button>  
		</Link >
	)
}

RegisterButton.propTypes = {
	area: PropTypes.string.isRequired, // indicates grid area
	path: PropTypes.string.isRequired, // indicates link path
}

RegisterButton.defaultProps = {
	path: '#'
}

export default RegisterButton
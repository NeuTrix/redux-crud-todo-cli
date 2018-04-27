import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const style = { 
	backgroundColor: 'lightgreen', 
	borderColor: 'green',
	color: 'green',
}

const LoginButton = ({ area, path }) => {
	return (
		<Link to = { path } style = {{ gridArea: area }} >
			<button className= 'button mat' style= { style } >
				Log in
			</button>  
		</Link >
	)
}

LoginButton.propTypes = {
	area: PropTypes.string.isRequired, // indicates grid area
	path: PropTypes.string.isRequired, // indicates link path
}

LoginButton.defaultProps = {
	path: '/',
}

export default LoginButton
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const style = { 
	backgroundColor: 'lightgreen', 
	borderColor: 'green',
	color: 'green',
}

const LoginButton = ({ area, name, path }) => {
	return (
		<Link to = { path } style = {{ gridArea: area }} >
			<button className= 'button mat' style= { style } >
				{ name }
			</button>  
		</Link >
	)
}

LoginButton.propTypes = {
	area: PropTypes.string.isRequired, // indicates grid area
	path: PropTypes.string.isRequired, // indicates link path
	name: PropTypes.string.isRequired, // altenative name for
}

LoginButton.defaultProps = {
	path: '#',
	name: 'Log in',
}

export default LoginButton
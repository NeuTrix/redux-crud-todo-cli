import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ActiveLink = styled(Link) `
	padding: 0;
	align-content: center;
	justify-content: center;
	${ ({ auth }) => auth ? `display: inline-grid;` : `display: none;`}
`;

const NavAuthYes = (props, context) => {
	return (
		<ActiveLink 
			to= { props.to }
			auth= { props.isAuthenticated } 
			className= { `${ props.className }` }
		/>
	);
}

NavAuthYes.propTypes = {
	auth: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	className: PropTypes.string,
};

NavAuthYes.defaultProps = {
	auth: '',
	to: '#',
}

NavAuthYes.contextTypes= {
	router: PropTypes.object.isRequired,
};

export default NavAuthYes;
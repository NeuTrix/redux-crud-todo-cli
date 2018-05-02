import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ActiveLink = styled(Link) `
	padding: 0;
	align-content: center;
	justify-content: center;
	${ ({ auth }) => auth ? `display: none;` : `display: inline-grid;`}
`;

const NavAuthNo = (props, context) => {
	return (
		<ActiveLink 
			to= { props.to }
			auth= { props.isAuthenticated } 
			className= { `${ props.className }` }
		/>
	)
}

NavAuthNo.propTypes = {
	auth: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	className: PropTypes.string,
};

NavAuthNo.defaultProps = {
	auth: '',
	to: '#',
}

NavAuthNo.contextTypes= {
	router: PropTypes.object.isRequired,
};

export default NavAuthNo;
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ActiveLink = styled(Link) `
	padding: 0;
	display: inline-grid;
	align-content: center;
	justify-content: center;
`;

const NavItem = (props, context) => {
	return (
		<ActiveLink 
			to= { props.to }
			className= { `${ props.className }` }
		/>
	);
}

NavItem.propTypes = {
	to: PropTypes.string.isRequired,
	className: PropTypes.string,
};

NavItem.defaultProps = {
	to: '#',
}

NavItem.contextTypes= {
	router: PropTypes.object.isRequired,
};

export default NavItem;
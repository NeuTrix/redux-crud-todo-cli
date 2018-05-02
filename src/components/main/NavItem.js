import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = styled.li `
	padding: 0;
	display: inline-grid;
	align-content: center;
	justify-content: center;
`;

const NavItem = ({ className, context, name, to }) => {
	return (
			<Link to= { to }> 
				<ListItem className= { className } >
					{ name } 
				</ListItem>
			</Link>
	);
}

NavItem.propTypes = {
	to: PropTypes.string.isRequired,
	className: PropTypes.string,
	name: PropTypes.string,
};

NavItem.defaultProps = {
	to: '#',
}

NavItem.contextTypes= {
	router: PropTypes.object.isRequired,
};

export default NavItem;
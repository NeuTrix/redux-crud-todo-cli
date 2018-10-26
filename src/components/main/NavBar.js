// This component holds the full navigation bar 
import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../helpers/cssConstants';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// === components ===
import logo from '../../assets/logo-white.png';
// import NavSection from './NavSection';

// ===  CSS  === 
const Grid = styled.div `
	grid-area: navBar;
	grid-template-areas: " menu logo search login ";
	// grid-template-columns: repeat(4, 1fr);
	
	background: steelblue;
	// border-bottom: 1px solid lightgrey ;
	display: grid;
	// padding: 5px 0px 5px 0px;
  place-items: center;
	
	// width: 100%;
	& * {
		// color: #fafafa;
		color: orange;
	}
`;
const Menu = styled.div `
	grid-area: menu;
`

// navbar logo
const Logo = styled.img `
	grid-area: logo;
	max-width: 75px;
`;

// dashboard icon for pulling up stats
const Dash = styled(FontAwesomeIcon) `
	// color: ${colors._iceblue};
	grid-area: dash;
	font-size: 2em;
	place-self: center;
`;

// ===  Main Component  === 
const NavBar = (props, context) => {
	const { auth, logout } = props;

	return (
		<Grid className='nav-bar'>
			<Menu className='menu'> Menu Item </Menu>
			<Logo className='logo' src={ logo } alt='logo'/> 
			{/* <Dash className='dash-icon' icon='tachometer-alt'/> */}
			{/* <NavSection auth={ auth } logout={ logout }/> */}

		</Grid>
	);
};

// === Props  === 
NavBar.propTypes = {
	auth: PropTypes.bool,
	logout: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
	auth: false,
	logout: (f) => 'Default action: Navbar logout fn',
};

// NavBar.contextTypes = { router: PropTypes.object.isRequired };

export default NavBar;

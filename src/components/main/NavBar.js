// holds the full navigation bar 
import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../helpers/cssConstants';
import logo from '../../assets/done-blue.png';
import styled from 'styled-components';
// === components ===
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavSection from './NavSection';
// ===  CSS  === 
const Grid = styled.div `
	grid-area: nav-bar;
	grid-template-areas: " logo dash nav-section ";
	grid-template-columns: repeat(3, 1fr);

	border-bottom: 1px solid grey;
	display: inline-grid;
  height: 49px;
	padding: 0px 0px 10px 0px;
	width: 100%;
`;
// navbar logo
const Logo = styled.img `
	grid-area: logo;
	max-width: 75px;
	place-self: center left;
`;
// dashboard icon for pulling up stats
const Dash = styled(FontAwesomeIcon) `
	color: ${colors._iceblue};
	grid-area: dash;
	font-size: 2em;
	place-self: center;
`;
// ===  Main Component  === 
const NavBar = (props, context) => {
	const { auth, logout } = props;

	return (
		<Grid className='nav-bar'>
			<Logo className='logo' src={ logo } alt='logo'/> 
			<Dash className='dash-icon' icon='tachometer-alt'/>
			<NavSection auth={ auth } logout={ logout }/>
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

NavBar.contextTypes = { router: PropTypes.object.isRequired };

export default NavBar;

import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../helpers/cssConstants';
import logo from '../../assets/done.png';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavSection from './NavSection';

// +++++++++  CSS  +++++++++ 
const Grid = styled.div `
	grid-area: nav-bar;
	grid-template-areas: " logo dash nav-section " ;
	grid-template-columns: repeat(3, 1fr);
	border-bottom: 1px solid grey;
	color: ${colors._olive};
	display: inline-grid;
  height: 49px;
	padding: 0px 0px 10px 0px;
	width: 100%;
`;
// nav logo
const Logo = styled.img `
	grid-area: logo;
	max-width: 65px;
	place-self: center left;
	`;
// dashboard icon for pulling up stats
const Dash = styled(FontAwesomeIcon) `
	grid-area: dash;
	font-size: 1.5em;
	place-self: center;
`;
// +++++++++  COMPONENT  +++++++++ 
const NavBar = (props, context) => {
	const { auth, logout } = props;

	return (
		<Grid className='nav-bar'>
			<Logo className='logo' src={ logo } alt='logo'/> 
			<Dash className='dash-icon' icon='chart-line'/>
			<NavSection 
				auth={ auth } 
				logout={ logout } 
			/>
		</Grid>
	);
};
// +++++++++ PROPS  +++++++++ 
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

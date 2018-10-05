import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import logo from '../../assets/done.png';
import { colors } from '../../helpers/cssConstants';

import NavSection from './NavSection';

// +++++++++  CSS  +++++++++ 
const Grid = styled.div `
	grid-area: nav-bar;
	grid-template-areas: " logo  dash  nav " ;
	grid-template-columns: repeat(3, 1fr);
	display: inline-grid;
	place-items: center;
  height: 49px;
	width: 100%;
	padding-bottom: 10px;
	border-bottom: 1px solid grey;
	color: ${colors._olive};
`;
const Logo = styled.img `
	grid-area: logo;
	max-width:100px;
`;
const Dash = styled(FontAwesomeIcon) `
	grid-area: dash;
	font-size: 2em;
`;
// +++++++++  COMPONENT  +++++++++ 
const NavBar = (props, context) => {
	const { authApi, logout } = props;

	return (
		<Grid className= 'nav-bar'>
			<Logo className='logo' src={ logo } alt="logo"/> 
			<Dash className='dash-icon' icon='chart-line'/>
			<NavSection 
				auth={ authApi.isAuthenticated } 
				logout={ logout } 
				router='router'
			/>
		</Grid>
	);
};
// +++++++++ PROPS  +++++++++ 
NavBar.propTypes = {
	authApi: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
	authApi: {
		user: { username: 'test' }
	},
	logout: (f) => alert('Default action: Navbar logout fn'),
};

NavBar.contextTypes = {
	router: PropTypes.object.isRequired,
};

export default NavBar;

import React from 'react';
import PropTypes from 'prop-types';
import NavSection from './NavSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/done.png';
import styled from 'styled-components';
import { colors, media } from '../../helpers/cssConstants';
// +++++++++  CSS  +++++++++ 
const Grid = styled.div `
	grid-template-areas: " logo  dash  nav " ;
	grid-template-columns: 1fr 1fr 1fr;
	display: inline-grid;
	place-items: center;

  height: 49px;
	width: 100%;
	color: ${colors._olive};

	// @media (${media._medium}) {
	// 	grid-template-columns: 2fr 1fr 1fr;
	// }
`;
const Logo = styled.img `
	grid-area: logo;
	max-width:100px ;
`;
const Dash = styled(FontAwesomeIcon) `
	grid-area: dash;
	width: 100%;
	color: ${colors._olive} ;
	font-size: 2em;
`;
// +++++++++  COMPONENT  +++++++++ 
const NavBar = (props, context) => {

	const auth = props.authApi.isAuthenticated;
	const logout = props.logout;

	return (
		<Grid className= 'NavBar'>
			<Logo className='logo' src={logo} alt="logo"/> 
			<Dash icon='chart-line'/>
			<NavSection auth='auth' logout='logout' router='router'/>
		</Grid>
	);
};
// +++++++++ PROPS  +++++++++ 
NavBar.propTypes = {
	authApi: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
	authApi:  {
		user: {
			username: 'test'
		}
	},
	logout:  f => alert('Default action: Navbar logout fn'),
};

NavBar.contextTypes = {
	router: PropTypes.object.isRequired,
};

export default NavBar;
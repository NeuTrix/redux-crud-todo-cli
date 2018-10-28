// Navigation section of the nav bar with toggling menu based on media
import React from 'react';
import PropTypes from 'prop-types';
import { colors, media } from '../../helpers/cssConstants';
import styled from 'styled-components';
// ===> components <===
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// ===> CSS <===
const Navigation = styled.div `
	grid-area: navSection;
	grid-template-areas: " menu ";
	display: inline-grid;
	& * { 
		color: ${colors._iceblue};	
		:hover { color: orange } 
	}
`;
// mobbile collapsed menu icon
const Burger = styled(FontAwesomeIcon) `
	grid-area: menu;
	font-size: 2em;
	padding-right: 10px;
	place-self: center right;
	@media (${media._medium}) { display: none }
`;
// full menu for larger screens
const Menu = styled.ul `
	grid-area: menu;
	display: none;
	@media (${media._medium}) {
		display: inline-flex;
		justify-content: space-evenly;
		text-decoration: none;
	}
`;
// auth list elements
const AuthLi = styled(Link) `
	place-content: center right;
	width: 100px;
	${({ auth }) => auth === 'true'
		? `display: inline-grid` 
		: `display: none` 
}
`;
// unauthorized menu
const NoAuthLi = styled(Link) `
	place-content: center right;
	width: 100px;
	${({ auth }) => auth === 'false'
		? `display: inline-grid;` 
		: `display: none` 
	}
`;
// +++++++++  COMPONENT  +++++++++ 
const NavSection = (props, context) => {
	const { auth, logout } = props;

	const onLogout = (e) => {
		e.preventDefault();
		logout();
		context.router.history.push('/login');
	};

	return (
			<Navigation className='nav-section'> 

				<Burger id='burger' icon='ellipsis-h'/>

				<Menu id='menu'> 
					<AuthLi auth={ auth.toString() }to='/todos'> 
						Todos 
					</AuthLi>

					<AuthLi auth={ auth.toString() } to='/#' onClick={ onLogout }> 
						Logout 
					</AuthLi>
					
					<NoAuthLi auth={ auth.toString() } to='/register'> 
						Register 
					</NoAuthLi>

					<NoAuthLi auth={ auth.toString() } to='/login'> 
						Login 
					</NoAuthLi>
				</Menu>

			</Navigation>
	);
};
// +++++++++ PROPS  +++++++++ 
NavSection.propTypes = {
	auth: PropTypes.bool,
	logout: PropTypes.func.isRequired,
};

NavSection.defaultProps = {
	auth: false,
	logout: (f) => 'Default action: Navbar logout fn',
};

NavSection.contextTypes = { router: PropTypes.object.isRequired };

export default NavSection;

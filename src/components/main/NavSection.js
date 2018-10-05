// Navigation section of the nav bar with toggling menu based on media
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// ---------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { colors, media } from '../../helpers/cssConstants';

// +++++++++  CSS  +++++++++ 
const Navigation = styled.div `
	grid-area: nav-section;
	grid-template-areas: " menu ";
	display: inline-grid;

	& * {
		:hover { color: lime }
	}
	
	// @media (${media._medium}) {
	// 	display: inline-grid;
	// 	// grid-template-areas: " menu "
	// }
`;
// mobbile collapsed menu icon
const Burger = styled(FontAwesomeIcon) `
	grid-area: menu;

	color: ${colors._olive};	
	font-size: 2em;
	place-self: center right;

	@media (${media._medium}) {
		display: none;
	}
`;
// full menu for larger screens
const Menu = styled.ul `
	grid-area: menu;
	display: none;
	
	@media (${media._medium}) {
		display: inline-flex;
		justify-content: space-evenly;
		// padding: 10px;
		text-decoration: none;
	}
`;

// +++++++++  Elements  +++++++++ 
const AuthLi = styled.li `
	display: inline-grid;
	font-size: initial; //?
	place-content: center;
	text-shadow: none;
	width: 100px;

	${ ({auth}) => auth 
		? `display: inline-grid`
		: `display: none`
	}
`;

const NoAuthLi = styled.li `
	width: 100px;
	display: inline-grid;
	place-content: center;
	text-shadow: none;
	font-size: initial

	${({ auth }) => !auth 
		? `display: inline-grid;` 
		: `display: none;`
	}
`;

const A = styled(Link) `
	&:hover { color: lime; }
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

			<Navigation className='nav-section' > 

				<Burger id='burger' icon='bars'/>

				<Menu id='menu' > 
					<AuthLi auth={ auth } > 
						<A to='/todos' > Todos </A>
					</AuthLi>

					<AuthLi auth={ auth } > 
						<A to='/#' onClick={ onLogout }> Logout </A>
					</AuthLi>
					
					<NoAuthLi auth={ auth } > 
						<A to='/register' > Register </A>
					</NoAuthLi>

					<NoAuthLi auth={ auth } > 
						<A to='/login' > Login </A>
					</NoAuthLi>

				</Menu>

			</Navigation>

	);
};

// +++++++++ PROPS  +++++++++ 

NavSection.propTypes = {
	authApi: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
};

NavSection.defaultProps = {
	authApi:  {
		user: {
			username: 'test'
		}
	},
	logout:  f => alert('Default action: Navbar logout fn'),
};

NavSection.contextTypes= {
	router: PropTypes.object.isRequired,
};

export default NavSection;
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// ---------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { colors, media } from '../../helpers/cssConstants';

// +++++++++  CSS  +++++++++ 


// +++++++++ Nav Section  +++++++++ 

const Navigation = styled.div `
	grid-area: nav-section;

	grid-template-areas: " menu ";
	display: inline-grid;
	place-content: center;
	// padding-right: 5px;

	&:hover { color:lime; }

	@media (max-width: 630px) {
		 &:hover ul {
			display: inline-grid;
			grid-row-gap: 15px
			position: absolute;
			width: 100%;
			min-height: 59px;
			right: 0px;
			top: 54px;
			opacity: .75;
		}
	}
	
	@media (${media._medium}) {
		display: inline-grid;
		grid-template-areas: "menu"
	}
`;

const Burger = styled(FontAwesomeIcon) `
	grid-area: menu;
	display: inline-grid;
	place-self: center right;
	color: ${colors._olive};	
	font-size: 2em;
	&:hover { color: lime;}

	// @media (${media._medium}) {
	// 	display: none;
	// }
`;

const Menu = styled.ul `
	grid-area: Menu;
	display: none;
	place-content: center;

	padding: 10px;
	margin: 0;
	text-decoration: none;

	@media (${media._medium}) {
		display: inline-flex;
		justify-content: space-evenly;
	}
`;

// +++++++++  Elements  +++++++++ 
const AuthLi = styled.li `
	width: 100px;

	display: inline-grid;
	place-content: center;
	text-shadow: none;
	font-size: initial

	${ ({auth}) => auth ? `
		display: inline-grid;` : `
		display: none;
	`}
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

				<Burger className='burger' icon='bars'/>

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

					<NoAuthLi auth= { auth } > 
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
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// ---------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { colors, media } from '../../helpers/cssConstants';

// +++++++++  CSS  +++++++++ 

const baseColor = colors._deepblue;

const Grid = styled.div `

	grid-template-areas: " logo  dash  nav " ;
	grid-template-columns: 1fr 1fr 1fr;
	display: inline-grid;
	place-items: center;

  height: 49px;
	width: 100%;
  // margin-bottom: 40px;
	padding 5px;
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
// +++++++++ Nav Section  +++++++++ 

const Navigation = styled.div `
	grid-area: nav;
	display: inline-grid;
	place-content: center;
	padding-right: 5px;

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
			background: ${baseColor};
			opacity: .75;
		}
	}
	
	@media (${media._medium}) {
		display: inline-grid;
		grid-template-areas: "Menu"
	}
`;

const Burger = styled.div `
	display: inline-grid;
	place-content: center right;
	color: ${colors._iceblue};	
	&:hover { color: lime;}

	@media (${media._medium}) {
		display: none;
	}
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

	const onLogout = (e) => {
		e.preventDefault();
		props.logout();
		context.router.history.push('/login');
	};

	const auth = props.auth;

	return (

			<Navigation id= 'Navigation' > 

				<Burger id= 'Burger' className= ' engr fa fa-navicon fa-2x'/>

				<Menu id= 'Menu' > 
					<AuthLi auth= { auth } > 
						<A to= '/todos' > Todos </A>
					</AuthLi>

					<AuthLi auth= { auth } > 
						<A to= '/#' onClick= { onLogout }> Logout </A>
					</AuthLi>
					
					<NoAuthLi auth= { auth } > 
						<A to= '/register' > Register </A>
					</NoAuthLi>

					<NoAuthLi auth= { auth } > 
						<A to= '/login' > Login </A>
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
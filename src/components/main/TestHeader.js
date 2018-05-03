import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// custom
import DropNav from './DropNav';
import NavItem from './NavItem';
import { colors, media } from '../../helpers/cssConstants';

// +++++++++  CSS  +++++++++ 

const Header = styled.div `
	display: grid;
	grid-template-areas: "home Navblock";
	grid-template-columns: 2fr 1fr;
	
	position: fixed;
  height: 49px;
	width: 100%;
  margin-bottom: 40px;
	top: 0;
	left:0;
	z-index: 100;
	background: aliceblue;
	border: 1px solid ${colors._deepblue};
	padding 5px;
`;

// +++++++++ Home Section  +++++++++ 
const Home = styled.div `
	grid-area: home;
	display: inline-grid;
	grid-template-areas: "Logo Welcome";
	align-content: start;
`;

const Logo = styled.div `
	grid-area: Logo;
	display: grid;
	place-content: center left;
	text-indent: 10px;
`;

const Welcome = styled.div `
	grid-area: Welcome;
	display: grid;
	place-content: center;
`;

// +++++++++ Nav Section  +++++++++ 
const NavBlock = styled.div `
	grid-area: Navblock;
	display: inline-grid;
	// grid-template-areas: "Burger";

  place-content: center right;
  // padding-right: 10px;
	  text-decoration: none;

  // &:active, &:hover {
  	background: palegreen;
		grid-template-areas: 
		"Burger"
		"Todos"
		"Logout"
		"Register"
		"login"
		;


		// & div {
		// 	display: none;
		// 	color: red;
		// 	// position: fixed;
		// }

		// & ul {
		// 	width: 100%;
		// 	height: 100px;
		// 	top: 35;
		// 	display: inline-flex
		// 	background: paleviolet;
		// 	color: lime;
		// }
  }

	// @media (${media._medium}) {
	// 	grid-template-areas: "Menu";
	// }
`;

const Burger = styled.div `
	grid-area: Burger;
	display: inline-grid;
	place-content: center;

	color: ${colors._iceblue};
	&:hover { color:lime; }

	// @media (${media._medium}) {
	// 	display: none;
	// }
`;

const Menu = styled.ul `
	grid-area: Menu;
	// display: none;
	place-content: center;
	padding: 0;
	margin: 0;

	& li {
		// display: none;
		// background: orange;
	}

	@media (${media._medium}) {
		display: inline-flex;
		justify-content: space-evenly;
	}
`;

// +++++++++  Elements  +++++++++ 
const AuthLi = styled.li `
	width: 100px;
	// ${ ({auth}) => auth ? `display: inline-grid;`:`display: none;`}
`;
const NoAuthLi = styled.li `
	width: 100px;
	// ${ ({auth}) => !auth ? `display: inline-grid;`:`display: none;`}
`;

const A = styled(Link) `
	&:hover { 
		color: lime;
	}
`;

// +++++++++  COMPONENT  +++++++++ 

const TestHeader = (props, context) => {

	const logout = (e) => {
		e.preventDefault();
		props.logout();
		context.router.history.push('/login');
	}

	const auth = props.authApi.isAuthenticated

	return (

		<Header id= 'Header' >

			<Home id= 'Home'>

				<Logo id= 'Logo'> 
						<A to= '/' > Logo </A>
				</Logo>

				<Welcome id= 'Welcome' > 
					Welcome 
				</Welcome>

			</Home>

			<NavBlock id= 'NavBlock'>
				
				<Burger id= 'Burger' className= ' engr fa fa-navicon fa-2x'/> 
				<Menu id= 'Menu' > 

					<AuthLi auth= {auth} > 
						<A to= '/todos' > Todos </A>
					 </AuthLi>

					<AuthLi auth= {auth} > 
						<A to= '/#' onClick= {logout}> Logout </A>
					 </AuthLi>
					
					<NoAuthLi auth= {auth} > 
						<A to= '/register' > Register </A>
					 </NoAuthLi>

					<NoAuthLi auth= {auth} > 
						<A to= '/login' > Login </A>
					 </NoAuthLi>

				</Menu>
				
			</NavBlock>

		</Header>
	)
};


// +++++++++ PROPS  +++++++++ 

TestHeader.propTypes = {
	authApi: PropTypes.object.isRequired,
	Logout: PropTypes.func.isRequired,
};

TestHeader.defaultProps = {
	authApi:  {},
	Logout:  f => alert('Default action: Navbar Logout fn'),
}

TestHeader.contextTypes= {
	router: PropTypes.object.isRequired,
};

export default TestHeader;
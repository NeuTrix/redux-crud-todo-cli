import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/done.png';
// custom
import { colors, media } from '../../helpers/cssConstants';

// +++++++++  CSS  +++++++++ 

const baseColor = colors._deepblue;

const Grid = styled.div `
	display: grid;
	
	grid-template-areas: " Home  Home  Navigation " ;
	grid-template-columns: 1fr 3fr 1fr;

  height: 49px;
	width: 100%;
  // margin-bottom: 40px;
	padding 5px;
	
	color: ${colors._olive};

	// @media (${media._medium}) {
	// 	grid-template-columns: 2fr 1fr 1fr;
	// }
	
`;
// +++++++++ Home Section  +++++++++ 

const Home = styled.div `
	grid-area: Home;z
	display: inline-grid;
	place-content: center;
	grid-template-areas: "Logo Welcome";
	grid-template-columns: 1fr 3fr;
`;

const Logo = styled.img `
	grid-area: Logo;
	// text-indent: 10px;
	// text-decoration: none;
	&:hover { color:lime; }
	width: 50px;
`;

const Message = styled.div `
	grid-area: Welcome;
	place-content: center;
	display: inline-grid;
`;
// +++++++++ Nav Section  +++++++++ 

const Navigation = styled.div `
	grid-area: Navigation;
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

const NavBar = (props, context) => {

	const onLogout = (e) => {
		e.preventDefault();
		props.logout();
		context.router.history.push('/login');
	};

	const auth = props.authApi.isAuthenticated;
	const name = props.authApi.user.username;

	return (

		<Grid className= 'NavBar' >

			<Home id= 'Home'>

				<Logo className='logo' src={logo} alt="logo"/> 

				<Message id= 'Message' > 
					{ auth ? `Welcome ${ name }!` : 'Please Log in!' }
				</Message>

			</Home>
				
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

		</Grid>
	);
};

// +++++++++ PROPS  +++++++++ 

NavBar.propTypes = {
	authApi: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
	authApi:  {},
	logout:  f => alert('Default action: Navbar logout fn'),
};

NavBar.contextTypes= {
	router: PropTypes.object.isRequired,
};

export default NavBar;
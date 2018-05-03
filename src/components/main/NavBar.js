import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// custom
import DropNav from './DropNav';
import NavItem from './NavItem';
import { colors, media } from '../../helpers/cssConstants';

// +++++++++  CSS  +++++++++ 

const Grid = styled.div `
	display: grid;
	grid-template-areas: " Home  Home  Navigation " ;
	grid-template-columns: 1fr 3fr 1fr;
	
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

	@media (${media._medium}) {
		grid-template-columns: 2fr 1fr 1fr;
	}
`;

// +++++++++ Home Section  +++++++++ 
const Home = styled.div `
	grid-area: Home;
	display: inline-grid;
	place-content: center;
	grid-template-areas: "Logo Welcome";
	grid-template-columns: 1fr 3fr;
`;

const Logo = styled.div `
	grid-area: Logo;
	text-indent: 10px;
	
`;

const Message = styled.div `
	grid-area: Welcome;
`;

// +++++++++ Nav Section  +++++++++ 

const Navigation = styled.div `
	grid-area: Navigation;
	display: inline-grid;
	place-content: center right;
	padding-right: 5px;

	&:hover { color:lime; }

	@media (max-width: 630px) {
		&:hover ul {
			display: inline-grid;
			grid-row-gap: 15px
			position: absolute;
			width: 25%;
			min-height: 90px;
			right: 0px;
			top: 34px;
			background: aliceblue;
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

	${ ({auth}) => auth ? `display: inline-grid;`:`display: none;`}
`;
const NoAuthLi = styled.li `
	width: 100px;
	display: inline-grid;
	place-content: center;
	text-shadow: none;
	font-size: initial

	${({auth}) => !auth ? `display: inline-grid;`:`display: none;`}
`;

const A = styled(Link) `
	&:hover { color: lime; }
`;

// +++++++++  COMPONENT  +++++++++ 

const NvBar = (props, context) => {

	const logout = (e) => {
		e.preventDefault();
		props.logout();
		context.router.history.push('/login');
	}

	const auth = props.authApi.isAuthenticated
	const name = props.authApi.user.username

	return (

		<Grid id= 'Grid' >

			<Home id= 'Home'>

				<Logo id= 'Logo'> 
						<A to= '/' className= "engr fa fa-gg fa-2x" alt="logo"/> 
				</Logo>

				<Message id= 'Message' > 
					{ auth ? `Welcome ${ name }!` : `Please Log in!`}
				</Message>

			</Home>
				
			<Navigation id= 'Navigation' > 

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

			</Navigation>

		</Grid>
	)
};

// +++++++++ PROPS  +++++++++ 

NvBar.propTypes = {
	authApi: PropTypes.object.isRequired,
	Logout: PropTypes.func.isRequired,
};

NvBar.defaultProps = {
	authApi:  {},
	Logout:  f => alert('Default action: Navbar Logout fn'),
}

NvBar.contextTypes= {
	router: PropTypes.object.isRequired,
};

export default NvBar;
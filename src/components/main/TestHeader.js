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
	grid-template-areas: 
		" Home  Home  Burger " 
		" Menu  Menu  Menu   "
	;
	grid-template-columns: 1fr 1fr 1fr;
	
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
	grid-area: Home;
	display: inline-grid;
	grid-template-areas: "Logo Welcome";
	grid-template-columns: 1fr 3fr;
	align-content: start;
`;

const Logo = styled.div `
	grid-area: Logo;
	display: grid;
	place-content: center left;
	text-indent: 10px;
`;

const Message = styled.div `
	grid-area: Welcome;
	display: grid;
	place-content: center;
`;

// +++++++++ Nav Section  +++++++++ 

const Burger = styled.div `
	grid-area: Burger;
	display: inline-grid;
	place-content: center right;

	color: ${colors._iceblue};
	&:hover { color:lime; }

	// @media (${media._medium}) {
	// 	display: none;
	// }
`;

const Menu = styled.ul `
	grid-area: Menu;
	// display: none;
	display: inline-grid;
	place-content: center;

	background: palegoldenrod;
	width: 65%;
	right: 0;
	position: absolute;

top: -1px;
	padding: 0;
	margin: 0;
	// background: palegreen;
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

display: inline-grid;

	// ${ ({auth}) => auth ? `display: inline-grid;`:`display: none;`}
`;
const NoAuthLi = styled.li `
	width: 100px;
	display: inline-grid;
	place-content: center;

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

		<Grid id= 'Grid' >

			<Home id= 'Home'>

				<Logo id= 'Logo'> 
						<A to= '/' > Logo </A>
				</Logo>

				<Message id= 'Message' > 
					Message 
				</Message>

			</Home>
				
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
			
			<Burger id= 'Burger' className= ' engr fa fa-navicon fa-2x'/> 

		</Grid>
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
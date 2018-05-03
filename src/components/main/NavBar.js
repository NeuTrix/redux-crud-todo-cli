import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// custom
import DropNav from './DropNav';
import NavItem from './NavItem';
import { colors, media } from '../../helpers/cssConstants';

// +++++++++  CSS  +++++++++ 

const GridNav = styled.nav`
	display: grid;
	grid-template-areas: " home menu ";
	grid-template-columns: 3fr 1fr;

	justify-content: space-around;
	opacity: .9;
	position: fixed;
	padding: 10px;
	z-index: 100;
	width: 100%;
	color: ${ colors._baseblue };

	@media (${media._medium}) {
		grid-template-areas: " home ... menu ";
		grid-template-columns: 2fr 2fr 1fr;
	}
	@media (${media._large}) {
		font-size: 1.25em;
	}
`;

const Home = styled.div `
	grid-area: home;
	display: inline-grid;
	grid-template-areas: " logo  welcome ";
	grid-template-columns: 1fr 4fr;

	margin: 0;
	padding: 0;
`;

	const Logo = styled(NavItem) `
		grid-area: logo;
		text-decoration: none;
		&:hover { color:lime; }
	`;

	const Welcome = styled.div `
		grid-area: welcome;
		display: inline-grid;
		align-content: center;
    justify-content: left;
    text-indent: 10px;
	`;

const Menu = styled.ul `
	grid-area: menu;
	grid-template-areas: "burger""todos""logout";
	grid-template-rows: auto;

	margin: 0;
	padding: 0;
	
	* {
		display: none;
	}

	&:active ${LogoutBtn} {
		background: yellow;
		display: grid;
		grid-gap:5px;
	}


	@media (${media._medium}) {
		${ ({ auth }) => auth ? `
			grid-template-areas: " todos logout ";
			grid-template-columns: auto;
		` : `
			grid-template-areas: " regis login ";
			grid-template-columns: auto;
		` }
	}

`;

	const Burger = styled.div`
		grid-area: burger;
		display: inline-grid;
		align-content: center;
    justify-content: right;
    padding-right: 10px;
		color: ${colors._iceblue};

		&:hover { color:lime; }

		@media (${media._medium}) {
			display: none;
		}
	`;

	const TodosLink = styled.li`
		grid-area: todos;

		color: orange;

		&:hover { color:lime; }

		@media (${media._medium}) {
			${ ({ auth }) => auth ? `display: grid;`: `display: none` }
	`;

	const LogoutBtn = styled.button`
		grid-area: logout;

		color: orange;
		margin-left: 10px;
		background: none;
		border: none;

		&:hover { color:lime; }

		@media (${media._medium}) {
			${ ({ auth }) => auth ? `
				display: inline-grid;
			` : `
				display: none
			` }
		}
	`;

	const RegisterLink = styled(NavItem)`
		grid-area: regis;
		
		color: ${ colors._mintgreen }

		&:hover { color:lime; }

		@media (${media._medium}) {
			${ ({ auth }) => !auth ? `display: grid;` :`display: none`}
		}
	`;

		const LoginLink = styled(NavItem)`
		grid-area: login;

		color: ${ colors._mintgreen };

		&:hover { color:lime; }

		@media (${media._medium}) {
			${ ({ auth }) => !auth ? `display: grid;` :`display: none`}
		}
	`;

// +++++++++ COMPONENT  +++++++++ 

const NavBar = (props, context) => {

	const logout = (e) => {
		e.preventDefault();
		props.logout();
		context.router.history.push('/login');
	}

	const auth = props.authApi.isAuthenticated
	const name = props.authApi.user.username

	return (

		<GridNav auth= { auth } className= 'NavBar paper'>

			<Home id = 'home'>
				<Logo to= '/' className= "engr fa fa-gg fa-2x" alt="logo"/>
				<Welcome> 
					{ auth ? `Welcome ${ name }!` : `Please Log in!`}
				</Welcome>
			</Home>

			<Menu id= 'menu' auth= { auth }>
					<LoginLink to= '/login' auth= { auth } name= 'Login' />
					<RegisterLink to= '/register' auth={auth} name='Register'/>
					<TodosLink to= '/todos' auth= { auth } name= 'Todos'/>
					<LogoutBtn onClick= {logout} auth= {auth}>
						Logout
					</LogoutBtn>
					<Burger className= 'Burger engr fa fa-navicon fa-2x'/>
			</Menu>

		</GridNav>
	);
}

// +++++++++ PROPS  +++++++++ 

NavBar.propTypes = {
	authApi: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
	authApi:  {},
	logout:  f => alert('Default action: Navbar logout fn'),
}

NavBar.contextTypes= {
	router: PropTypes.object.isRequired,
};

export default NavBar;
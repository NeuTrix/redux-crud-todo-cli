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
	width: 100%;
	color: ${ colors._baseblue };

	@media (${media._medium}) {
		grid-template-areas: " home menu ";
		grid-template-columns: 2fr 1fr 1fr;
	}
`;

const Home = styled.ul `
	grid-area: home;
	display: inline-grid;
	grid-template-areas: " logo  welcome ";
	grid-template-columns: 1fr 4fr;

	margin: 0;
	padding: 0;

	@media (${media._medium}) {
		grid-template-columns: 1fr 1fr;
	}
`;

	const Logo = styled(NavItem) `
		grid-area: logo;
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
	display: inline-grid;
	grid-template-areas: " burger ";
	grid-template-columns: 1fr 1fr;

	margin: 0;
	padding: 0;

	@media (${media._medium}) {
		${ ({ auth }) => auth ? `
			grid-template-areas: " todos logout ";
			grid-template-columns: 1fr 1fr;
		` : `
			grid-template-areas: " regis login ";
			grid-template-columns: 1fr 1fr;
		` }
	}
`;

	const Burger = styled.li`
		grid-area: burger;
		display: inline-grid;
		align-content: center;
    justify-content: right;
    padding-right: 10px;

		color: ${colors._iceblue};

		@media (${media._medium}) {
			display: none;
		}
	`;

	const TodosLink = styled(Link)`
		grid-area: todos;
		display: none;

		@media (${media._medium}) {
			${ ({ auth }) => auth ? `display: grid;`: `display: none` }
	`;

	const LogoutBtn = styled.button`
		grid-area: logout;
		display: none;

		color: orange;
		margin-left: 10px;
		background: none;
		border: none;

		@media (${media._medium}) {
			${ ({ auth }) => auth ? `
				display: inline-grid;
			` : `
				display: none
			` }
		}
	`;

	const RegisterLink = styled(Link)`
		grid-area: regis;
		display: none;
		color: ${ colors._mintgreen };
			${ ({ auth }) => !auth ? `display: grid;` :`display: none`}
		}
	`;

		const LoginLink = styled(Link)`
		grid-area: login;
		display: none;
		color: ${ colors._mintgreen };

		@media (${media._medium}) {
			${ ({ auth }) => !auth ? `display: grid;` :`display: none`}
		}
	`;

	

// +++++++++ COMPONENT  +++++++++ 

const NavBar = (props, context) => {

	const logout = (e) => {
		e.preventDefault();
		props.logout();
		context.router.history.push('/');
	}

	const { isAuthenticated, user } = props.authApi;

	return (

		<GridNav auth= { isAuthenticated } className= 'NavBar paper'>

			<Home id = 'home'>

				<Logo to= '/' className= "engr fa fa-gg fa-2x" alt="logo"/>

				<Welcome> 
					{ isAuthenticated ? `Welcome ${ user.username }!` : `Please Log in!` }  
				</Welcome>

			</Home>

			<Menu id= 'menu' auth= { isAuthenticated }>

					<LoginLink to= '/login' auth= { isAuthenticated }>
						Log In 
					</LoginLink>

					<RegisterLink to= '/register' auth= { isAuthenticated }>
						Register 
					</RegisterLink>

					<TodosLink to= '/todos' auth= { isAuthenticated }>
							Todos
					</TodosLink>

					<LogoutBtn auth= { isAuthenticated }  onClick= { logout }>
							Log Out
					</LogoutBtn>

					<Burger className= ' Burger engr fa fa-navicon fa-2x'/>

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
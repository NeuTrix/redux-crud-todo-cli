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
	grid-template-columns: 1fr 1fr;

	justify-content: space-around;
	opacity: .9;
	position: fixed;
	padding: 10px;
	width: 100%;
	color: ${ colors._baseblue };

	@media (${ media._medium }) {
	}
`;

const Home = styled.ul `
	grid-area: home;
	display: inline-grid;
	grid-template-areas: " logo  welcome ";
	grid-template-columns: 1fr 4fr;
	margin: 0;
	padding: 0;
`;

	const Logo = styled(NavItem) `
		grid-area: logo;
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
	grid-template-areas: " nav todo reg login logout ";
	display: grid;
	grid-template-areas: "logo welcome";
	grid-template-columns: 1fr 1fr;
`;

	const LoginLink = styled(Link)`
		grid-area: login;
		color: ${ colors._mintgreen };
		display: none;

		@media (${media._medium}) {
			display: grid;
			${ ({ auth }) => auth ? `display: none; ` : `display: grid;` }
		}
	`;

	const LogoutBtn = styled.button`
		grid-area: logout;
		color: orange;
		margin-left: 10px;
		display: none;
		background: none;
		border: none;

		@media (${media._medium}) {
			display: grid;
			${ ({ auth }) => auth ? `display: grid; ` : `display: none;` }
		}
	`;

	const Navicon = styled.div`
		grid-area: nav;
		display: grid;
		align-content: center;
		color: ${colors._iceblue};
		&:hover {
		}

		@media (${media._medium}) {
			display: none;
		}
	`;

	const RegisterLink = styled(Link)`
		grid-area: reg;
		display: none;
		color: ${ colors._mintgreen };
		${ ({ auth }) => auth ? `display: none; ` : `display: grid;` }
		}
	`;

	const TodosLink = styled(Link)`
		grid-area: todo;
		display: none;

		@media (${media._medium}) {
			display: grid;
			${ ({ auth }) => auth ? `display: grid; ` : `display: none;` }
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
					{ isAuthenticated && `Welcome ${ user.username }!` }  
				</Welcome>
			</Home>

			<Menu>
				<ul>
					<TodosLink to= '/todos' auth= { isAuthenticated }>
							Todos
					</TodosLink>
				</ul>

				<ul>
					<LoginLink to= '/login' auth= { isAuthenticated }>
						Log In 
					</LoginLink>
				</ul>

				<ul>
					<RegisterLink to= '/register' auth= { isAuthenticated }>
						Register 
					</RegisterLink>
				</ul>

				<ul>
					<LogoutBtn auth= { isAuthenticated } onClick= { logout }>
						Log Out
					</LogoutBtn>
				</ul>

				<ul>
					<Navicon className= ' Navicon engr fa fa-navicon fa-2x'/>
				</ul>
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
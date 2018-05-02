import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// custom
import { colors, media } from '../../helpers/cssConstants';

// +++++++++  CSS  +++++++++ 

const GridNav = styled.nav`
	display: grid;
	grid-template-areas: 
		"	todo  " 
		" regi  "
		" login "
		" logout  "
	;
	grid-template-columns: auto;
	grid-auto-rows: auto;
	background: white;

	width: 100%;
	justify-content: space-around;
	opacity: .9;
	padding: 10px;
	color: ${ colors._baseblue };

	@media (${ media._medium }) {
		width: 200px;
	}
`;


const LoginLink = styled(Link)`
	grid-area: login;
	color: ${ colors._mintgreen };
	display: none;

	@media (${media._medium}) {
		display: grid;
	}
`;

const LogoutBtn = styled.button`
	grid-area: lgot;
	color: orange;
	margin-left: 10px;
	display: none;

	@media (${media._medium}) {
		display: grid;
	}
`;

const Navicon = styled.div`
	grid-area: navicon;
	display: grid;
	align-content: center;
	color: ${colors._iceblue};

	@media (${media._medium}) {
		display: none;
	}
`;

const RegisterLink = styled(Link)`
	grid-area: regi;
	display: none;

	color: ${ colors._mintgreen };

	@media (${media._medium}) {
		${ ({ auth }) => auth ? `
			display: none ; 
		` : `
			display: grid ; 
		`
	}
	}
`;

const TodosLink = styled(Link)`
	grid-area: todo;
	display: none;

	@media (${media._medium}) {
		display: grid;
	}
`;

const Welcome = styled.div`
	grid-area: welcome;
	font-size: 1.25em;
`;

// +++++++++ COMPONENT  +++++++++ 

const NavBar = (props, context) => {

	const logout = (e) => {
		e.preventDefault();
		props.logout();
		context.router.history.push('/');
	}

	const { isAuthenticated, user } = props.authApi;

	const userLinks = (
		<LogoutBtn 
			id= 'logout_link' 
			className= 'ctr' 
			onClick= { logout } 
		>
			Log Out
		</LogoutBtn>
	);

	const logolink = (
		<LoginLink to= '/login' className= 'ctr'>
			Log In
		</LoginLink>
	);

	const dropbox = (
		<div>
			Instgram!!
		</div>
	);

	return (

		<GridNav className= {`NavBar ${ props.className} paper`} >
			
			<TodosLink 
				auth= { isAuthenticated }
				to= '/todos' 
				className= 'ctr'>
					Todos
			</TodosLink>

			<RegisterLink 
				auth= { isAuthenticated }
				to= '/register' 
				className= 'ctr'
			>
				Register 
			</RegisterLink>

				{ isAuthenticated ? userLinks : logolink }


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
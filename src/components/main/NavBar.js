import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// custom
import logo from '../../assets/logo.svg';
import styled from 'styled-components'

// +++++++++ COMPONENT  +++++++++ 

const NavBar = (props, context) => {

	const GridNav = styled.nav`
		display: grid;
		grid-template-areas: 
			"	logo 	welc ... home todo regi lgin lgot	"
		;
		grid-template-columns: auto;
		grid-auto-rows: auto;

		height: 3em;
		justify-content: space-around;
		opacity: .9;
	`;

	const Logo = styled.div`
		grid-area: logo;
	`;
	const WelcomeLink = styled.div`
		grid-area: welc;
	`;
	const HomeLink = styled.div`
		grid-area: home;
	`;
	const TodosLink = styled.div`
		grid-area: todo;
	`;
	const RegisterLink = styled.div`
		grid-area: regi;
	`;
	const LoginLink = styled.div`
		grid-area: lgin;
	`;
	const LogoutBtn = styled.button`
		grid-area: lgot;
		color: orange;
	`;

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

	const guestLinks = (
		<div>

			<LoginLink id= 'login_link' className= 'ctr'>
				<Link to= '/login' >Sign In</Link>
			</LoginLink>

			<RegisterLink id= 'register_link' className= 'ctr'>
				<Link to= '/register' >Register</Link>
			</RegisterLink>

		</div>
	);

	return (

		<GridNav className= 'NavBar engrBox paper' >

			<Logo id= 'logo_link' className= 'ctr'>
				<Link to= '/' >
					<div className= "engr App-logo ctr fa fa-gg fa-2x" alt= "logo" />
				</Link>
			</Logo>

			<WelcomeLink id= 'welcome_link' className= 'ctr'> 
				{ isAuthenticated ? `Welcome ${ user.username }!` : '' }  
			</WelcomeLink>

			<HomeLink id= 'home_link' className= 'ctr' >
				<Link to= '/' > Home </Link>
			</HomeLink>

			<TodosLink id= 'todos_link' className= 'ctr'>
				<Link to= '/todos' >
					Todos
				</Link>
			</TodosLink>

				{ isAuthenticated ? userLinks : guestLinks }
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
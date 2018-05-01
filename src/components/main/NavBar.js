import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// custom
import { colors } from '../../helpers/cssConstants';

// +++++++++ COMPONENT  +++++++++ 

const NavBar = (props, context) => {

	const GridNav = styled.nav`
		display: grid;
		grid-template-areas: 
			"	logo 	welc ... home todo regi lgin lgot	"
		;
		grid-template-columns: auto;
		grid-auto-rows: auto;

		justify-content: space-around;
		opacity: .9;
		padding: 10px;
		position: fixed;
		width: 100%;
		color: ${ colors._baseblue };

		@media (min-width: 650px) {
			grid-template-areas: 
			"	logo 	welc ... home todo regi lgin lgot	"
		;
			grid-template-columns: auto;
		}
	`;

	const Logo = styled.div`
		grid-area: logo;
	`;

	const Welcome = styled.div`
		grid-area: welc;
	`;

	const HomeLink = styled(Link)`
		grid-area: home;
	`;

	const TodosLink = styled(Link)`
		grid-area: todo;
	`;

	const RegisterLink = styled(Link)`
		grid-area: regi;
	`;

	const LoginLink = styled(Link)`
		grid-area: lgin;
		color: ${ colors._mintgreen };
	`;

	const LogoutBtn = styled.button`
		grid-area: lgot;
		color: orange;
		margin-left: 10px;
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

	const logolink = (
		<LoginLink to= '/login' className= 'ctr'>
			Log In
		</LoginLink>
	);

	const regilink = (
		<RegisterLink to= '/register' className= 'ctr'>
			Register 
		</RegisterLink>
	);

	return (

		<GridNav className= 'NavBar paper' >

			<Logo id= 'logo_link' className= 'ctr'>
				<Link to= '/' >
					<div className= "engr App-logo ctr fa fa-gg fa-2x" alt= "logo" />
				</Link>
			</Logo>

			<Welcome className= 'ctr'> 
				{ isAuthenticated ? `Welcome ${ user.username }!` : '' }  
			</Welcome>

			<HomeLink to= '/' className= 'ctr' >
				Home
			</HomeLink>

			<TodosLink to= '/todos' className= 'ctr'>
					Todos
			</TodosLink>
				{ isAuthenticated ? userLinks : logolink }
				{ isAuthenticated ? userLinks : regilink }
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
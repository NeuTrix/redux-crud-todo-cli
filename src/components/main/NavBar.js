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
		"	logo 	welc ...	navicon"
	;
	grid-template-columns: auto;
	grid-auto-rows: auto;

	justify-content: space-around;
	opacity: .9;
	padding: 10px;
	position: fixed;
	width: 100%;
	color: ${ colors._baseblue };

	@media (${ media._medium }) {
		grid-template-areas: 
		"	logo 	welc ... ... ... home todo regi lgin lgot	"
	;
		grid-template-columns: auto;
	}
`;

const HomeLink = styled(Link)`
	grid-area: home;
	display: none;

	@media (${media._medium}) {
		display: inline;
	}
`;

const Logo = styled.div`
	grid-area: logo;
`;

const LoginLink = styled(Link)`
	grid-area: lgin;
	color: darkgreen;
	display: none;

	@media (${media._medium}) {
		display: inline;
	}
`;

const LogoutBtn = styled.button`
	grid-area: lgot;
	color: orange;
	margin-left: 10px;

	display: none;
	@media (${media._medium}) {
		display: inline;
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

	@media (${media._medium}) {
		${ ({ auth }) => auth && `
			display: inline;
				color: orange;
		`}
	}
`;

const TodosLink = styled(Link)`
	grid-area: todo;
	display: none;

	@media (${media._medium}) {
		display: inline;
	}
`;

const Welcome = styled.div`
	grid-area: welc;
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

		<GridNav className= 'NavBar paper' >

			<Logo id= 'logo_link' className= 'ctr'>
				<Link to= '/' >
					<div className= "engr App-logo ctr fa fa-gg fa-2x" alt= "logo" />
				</Link>
			</Logo>

			<Welcome className= 'ctr'> 

				{ isAuthenticated && `Welcome ${ user.username }!`  }  
			</Welcome>

			<HomeLink to= '/' className= 'ctr' >
				Home
			</HomeLink>

			<TodosLink to= '/todos' className= 'ctr'>
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

			<Navicon className= ' Navicon engr fa fa-navicon fa-2x'/>

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
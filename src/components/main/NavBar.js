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
		"	logo 	welcome ... ... navicon"
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
		${ ({ auth }) => auth ? `
			grid-template-areas: "logo 	welcome ... ... ... todo lgot	"
		` : `
			grid-template-areas: "logo 	welcome ... ... ... regi login "
		`}
	;
		grid-template-columns: auto ;
		grid-column-gap: 0;
	}
`;

const Logo = styled(Link)`
	grid-area: logo;
	justify-content: left;
`;

const LoginLink = styled(Link)`
	grid-area: login;
	color: ${ colors._mintgreen };
	display: none;

	@media (${media._medium}) {
		display: grid;
		${ ({ auth }) => auth ? `
			display: none ; 
		` : `
			display: grid ; 
		`}
	}
`;

const LogoutBtn = styled.button`
	grid-area: lgot;
	color: orange;
	margin-left: 10px;
	display: none;

	@media (${media._medium}) {
		display: grid;
		${ ({ auth }) => auth ? `
			display: grid ; 
		` : `
			display: none ; 
		`}
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
		`}
	}
`;

const TodosLink = styled(Link)`
	grid-area: todo;
	display: none;

	@media (${media._medium}) {
		display: grid;
		${ ({ auth }) => auth ? `
			display: grid ; 
		` : `
			display: none ; 
		`}
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

	// const dropbox = (
	// 	<div>
	// 		Instgram!!
	// 	</div>
	// );

	return (

		<GridNav auth= { isAuthenticated } className= 'ctr NavBar paper' >

			<Logo to= '/' className= "engr fa fa-gg fa-2x" alt= "logo"/>

			<Welcome className= 'ctr'> 
				{ isAuthenticated && `Welcome ${ user.username }!` }  
			</Welcome>

			<TodosLink to= '/todos' auth= { isAuthenticated }>
					Todos
			</TodosLink>

			<LoginLink to= '/login' auth= { isAuthenticated }>
				Log In 
			</LoginLink>

			<RegisterLink to= '/register' auth= { isAuthenticated }>
				Register 
			</RegisterLink>

			<LogoutBtn auth= { isAuthenticated } onClick= { logout }>
				Log Out
			</LogoutBtn>

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
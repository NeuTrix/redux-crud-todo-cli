import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// custom
import { colors, media } from '../../helpers/cssConstants';

// +++++++++  CSS  +++++++++ 

const GridNav = styled.nav`
	display: grid;

	${ ({ auth }) => auth ? `
			grid-template-areas: "todo" "lgot"
		` : `
			grid-template-areas: "regi" "login"
		`}
	;
		grid-template-rows: auto ;
		grid-row-gap: 20px;
	
	background: ${colors._deepblue};
	border-radius: 2px;
	width: 100%;

	align-content: center;
	opacity: .9;
	padding: 10px;
	color: ${ colors._mintgreen };
	width: 200px;
`;

const LoginLink = styled(Link)`
	grid-area: login;
	display: none;
	justify-content: center;
	color: lime;

	@media (${media._medium}) {
		display: grid;
		${ ({ auth }) => auth ? `display: none; ` : `display: grid;` }
	}
`;

const LogoutBtn = styled.button`
	grid-area: lgot;
	color: lime;
	margin-left: 10px;
	display: none;
	background: none;
	border: none;

	justify-content: center;

	@media (${media._medium}) {
		display: grid;
		${ ({ auth }) => auth ? `display: grid; ` : `display: none;` }
	}
`;


const RegisterLink = styled(Link)`
	grid-area: regi;
	display: none;
	justify-content: center;
	color: orange;


	@media (${media._medium}) {
		${ ({ auth }) => auth ? `display: none; ` : `display: grid;` }
	}
`;

const TodosLink = styled(Link)`
	grid-area: todo;
	display: none;
	justify-content: center;
	color: orange;

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

	const { isAuthenticated } = props.authApi;

	return (

		<GridNav auth= { isAuthenticated } className= 'ctr NavBar paper' >
			<LoginLink to= '/login' auth= { isAuthenticated }>
				Log In 
			</LoginLink>

			<RegisterLink to= '/register' auth= { isAuthenticated }>
				Register 
			</RegisterLink>
			
			<TodosLink to= '/todos' auth= { isAuthenticated }>
					Todos
			</TodosLink>

			<LogoutBtn auth= { isAuthenticated } onClick= { logout }>
				Log Out
			</LogoutBtn>

		</GridNav>
	);
}


// +++++++++ PROPS  +++++++++ 

NavBar.propTypes = {
	authApi: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
	// +++++++++ !!!!!!!!!!!!!!!!!!!!!!!!!  +++++++++ 
	// authApi:  {isAuthenticated: false},
	authApi:  {isAuthenticated: true},
	logout:  f => alert('Default action: Navbar logout fn'),
}

NavBar.contextTypes= {
	router: PropTypes.object.isRequired,
};

export default NavBar;
// generat
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// ===> components <===
import { NavLink } from 'react-router-dom';
	
// list of link elemens
const Menu = styled.ul `
	display: flex;
	
`;
// auth list elements
const AuthLi = styled(NavLink) `
	place-content: center;
	width: 100px;
	${({ auth }) => auth === 'true'
		? `display: flex` 
		: `display: none` 
}
`;
// unauthorized menu
const NoAuthLi = styled(NavLink) `
	place-content: center;
	width: 100px;
	${({ auth }) => auth === 'false'
		? `display: flex;` 
		: `display: none` 
	}
`;
// +++++++++  COMPONENT  +++++++++ 
const NavSection = (props, context) => {
	const { auth, logout } = props;

	const onLogout = (e) => {
		e.preventDefault();
		logout();
		context.router.history.push('/login');
	};

	return (

		<Menu id='menu'> 
			<AuthLi to='/todos' auth={ auth.toString() } > 
				Todos 
			</AuthLi>

			<AuthLi to='/#' auth={ auth.toString() } onClick={ onLogout }> 
				Logout 
			</AuthLi>
			
			<NoAuthLi to='/register' auth={ auth.toString() } > 
				Register 
			</NoAuthLi>

			<NoAuthLi to='/login' auth={ auth.toString() } > 
				Login 
			</NoAuthLi>
		</Menu>

	);
};
// +++++++++ PROPS  +++++++++ 
NavSection.propTypes = {
	auth: PropTypes.bool,
	logout: PropTypes.func.isRequired,
};

NavSection.defaultProps = {
	auth: false,
	logout: (f) => 'Default action: Navbar logout fn',
};

NavSection.contextTypes = { router: PropTypes.object.isRequired };

export default NavSection;

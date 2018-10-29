// generat
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// ===> components <===
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
	
// list of link elemens
	const Menu = styled.ul `
	grid-area: menu;
	display: inline-grid;
	@media (${media._medium}) {
		display: inline-flex;
		justify-content: space-evenly;
		text-decoration: none;
	}
`;
// auth list elements
const AuthLi = styled(NavLink) `
	place-content: center right;
	width: 100px;
	${({ auth }) => auth === 'true'
		? `display: inline-grid` 
		: `display: none` 
}
`;
// unauthorized menu
const NoAuthLi = styled(NavLink) `
	place-content: center right;
	width: 100px;
	${({ auth }) => auth === 'false'
		? `display: inline-grid;` 
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
			<Grid className='navSection'> 

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

			</Grid>
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

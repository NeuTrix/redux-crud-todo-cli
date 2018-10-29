// generat
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// ===> components <===
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
	
// list of link elemens
// const Menu = styled.ul `
	// display: flex;
// `;

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

		<List id='menu'> 
			<ListItemText>
				<AuthLi to='/todos' auth={ auth.toString() } > 
					Todos 
				</AuthLi>
			</ListItemText>
			<ListItemText>
				<AuthLi to='/#' auth={ auth.toString() } onClick={ onLogout }> 
					Logout 
				</AuthLi>
			</ListItemText>
						<ListItemText>
				<NoAuthLi to='/register' auth={ auth.toString() } > 
					Register 
				</NoAuthLi>
			</ListItemText>
			<ListItemText>
				<NoAuthLi to='/login' auth={ auth.toString() } > 
					Login 
				</NoAuthLi>
			</ListItemText>
		</List>

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

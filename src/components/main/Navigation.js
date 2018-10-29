// generat
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// ===> components <===
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// auth list elements
const AuthLi = styled(NavLink) `
	place-content: center;
	${({ auth }) => auth === 'true'
		? `display: flex` 
		: `display: none` 
	}
`;
// unauthorized menu
const NoAuthLi = styled(NavLink) `
	place-content: center;
	${({ auth }) => auth === 'false'
		? `display: flex;` 
		: `display: none` 
	}
`;
// +++++++++  COMPONENT  +++++++++ 
function Navigation(props, context) {
	const { auth, logout } = props;

	const registerLink = { link:'/register', title: 'Register' };
	const logOutLink = { link:'/register', title: 'Logout' };
	const todosLink = { link:'/todos', title: 'Todos' };
	const logInLink = { link:'/login', title: 'Login' };

	const authorized = [ logOutLink, todosLink ];
	const unAuthorized = [ logInLink, registerLink ];

	const onLogout = (e) => {
		e.preventDefault();
		logout();
		context.router.history.push('/login');
	};

	return (

		<List > 
			{authorized.map(item => (
					<ListItem button key={ item.title }>
				<AuthLi to={item.link} auth={ auth.toString() } >
						<ListItemText primary={ item.title }/>
				</AuthLi>
					</ListItem>
			))}

			{unAuthorized.map(item => (
				<NoAuthLi to={item.link} auth={ auth.toString() } >
					<ListItem button key={ item.title }>
						<ListItemText primary={ item.title }/>
					</ListItem>
				</NoAuthLi>
			))}
				         
		</List>

	);
};
// +++++++++ PROPS  +++++++++ 
Navigation.propTypes = {
	auth: PropTypes.bool,
	logout: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
	auth: false,
	logout: (f) => 'Default action: Navbar logout fn',
};

Navigation.contextTypes = { router: PropTypes.object.isRequired };

export default Navigation;

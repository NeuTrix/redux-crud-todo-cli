// generat
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// ===> MUI components <===
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const styles = (theme) => ({
	root: {
		background: 'orange',
		color: 'orange'
	}
})

// === COMPONENT ===
function Navigation(props, context) {
	const { auth, classes, logout } = props;
	// unauthorized navigation links
	const registerLink 	= { showWithAuth: 'false', link:'/register', title: 'Register' };
	const logInLink 		= { showWithAuth: 'false', link:'/login', title: 'Login' };
	// authorized navigation links
	const todosLink 		= { showWithAuth: 'true', link:'/todos', title: 'Todos' };
	const logOutLink 		= { showWithAuth: 'true', link:'#', title: 'Logout' };
// filter links based on authorization status
	const displayLogic = (item) => ({
			display: String(auth) === item.showWithAuth ? 'flex' : 'none' 
	})
	// logout and return to login page (or 'home')
	const handleLogout = (e) => {
		e.preventDefault();
		logout();
		context.router.history.push('/');
	};

	return (
		<List > 

			{ [todosLink, logInLink, registerLink].map((item) => (
				<span style={ displayLogic(item) } >
					<ListItem className= { classes.root } button key={ item.title } >
						<NavLink to={ item.link } >
							<ListItemText  primary={ item.title } />
						</NavLink>
					</ListItem>
				</span>
			)) }
		
				<span style={ displayLogic(logOutLink) } onClick={ handleLogout }  >
					<ListItem button >
						{logOutLink.title}	
					</ListItem>
				</span>

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

export default withStyles(styles)(Navigation);

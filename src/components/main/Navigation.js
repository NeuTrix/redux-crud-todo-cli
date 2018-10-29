// generat
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// ===> MUI components <===
import { withStyles } from '@material-ui/core/styles';
import Circle from '@material-ui/icons/TripOrigin';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

function Navigation(props, context) {

	const { auth, classes, logout, toggle } = props;
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
		<List onClick={ toggle } > 

			{ [todosLink, logInLink, registerLink].map((item) => (
				<span style={ displayLogic(item) } >
					<NavLink to={ item.link } className={classes.root} activeClassName={ classes.active }  >
						<ListItem key={ item.title } className={ classes.root } button >
							<ListItemIcon>
								<Circle/>
							</ListItemIcon>
							<ListItemText primary={ item.title } />
						</ListItem>
					</NavLink>
				</span>
			)) }
		
			<span style={ displayLogic(logOutLink) } onClick={ handleLogout }  >
				<ListItem button >
					<ListItemIcon>
						<Circle/>
					</ListItemIcon>
					<Typography variant="h7" color="inherit" noWrap>
						{logOutLink.title}	
					</Typography>
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

export default withStyles((theme) => ({
	root: {
		textDecoration: 'none',
		width: '100%',
	},
	active: { background: 'aliceblue' },
}))(Navigation);

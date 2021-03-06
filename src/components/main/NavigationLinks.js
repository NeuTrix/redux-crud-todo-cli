import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// ===> MUI components <===
import Circle from '@material-ui/icons/TripOrigin';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import shortid from 'shortid';
import { withStyles } from '@material-ui/core/styles';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	isAuth: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
};
// to facilitate routing
const contextTypes = {
	router: PropTypes.instanceOf(Object).isRequired,
};

function NavigationLinks(props, context) {
	const {
		classes,
		isAuth,
		logout,
	} = props;
	//  persistent links
	const homeLink = {
		link: '/',
		showWithAuth: 'true',
		title: 'Home',
	};
	// unauthorized navigation links
	const registerLink = {
		link: '/register',
		showWithAuth: 'false',
		title: 'Register',
	};

	const logInLink = {
		link: '/login',
		showWithAuth: 'false',
		title: 'Login',
	};
	// authorized navigation links
	const todosLink = {
		link: '/todos',
		showWithAuth: 'true',
		title: 'Todos',
	};

	const logOutLink = {
		link: '#',
		showWithAuth: 'true',
		title: 'Logout',
	};
	// filter links based on authorization status
	const displayLogic = item => ({
		display: String(isAuth) === item.showWithAuth ? 'flex' : 'none',
	});
	// logout and return to login page (or 'home')
	const handleLogout = (e) => {
		e.preventDefault();
		logout();
		context.router.history.push('/');
	};

	return (
		<List>
			{/* separate home to show persistently for auth and no-auth */}
			<span>
				<NavLink
					to={homeLink.link}
					className={classes.root}
					activeClassName={classes.active}
				>
					<ListItem button>
						<ListItemIcon>
							<Circle />
						</ListItemIcon>
						<ListItemText primary={homeLink.title} />
					</ListItem>
				</NavLink>
			</span>

			{/* separate logut- need to assign #onClick fn */}
			<span style={displayLogic(logOutLink)}>
				<ListItem button onClick={handleLogout}>
					<ListItemIcon>
						<Circle />
					</ListItemIcon>
					<ListItemText primary={logOutLink.title} />
				</ListItem>
			</span>

			{ [todosLink, logInLink, registerLink].map(item => (
				<span key={shortid.generate()} style={displayLogic(item)}>
					<NavLink
						to={item.link}
						className={classes.root}
						activeClassName={classes.active}
					>
						<ListItem className={classes.root} button>
							<ListItemIcon>
								<Circle />
							</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItem>
					</NavLink>
				</span>
			)) }

		</List>
	);
}

const styles = theme => ({
	active: {
		background: theme.palette.primary.light,
	},

	root: {
		textDecoration: 'none',
		width: '100%',
	},
});

NavigationLinks.propTypes = propTypes;
NavigationLinks.contextTypes = contextTypes;

export default withStyles(styles, { withTheme: true })(NavigationLinks);

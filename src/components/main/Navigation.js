import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
// ===> MUI components <===
import { withStyles } from '@material-ui/core/styles';

import Circle from '@material-ui/icons/TripOrigin';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import shortid from 'shortid';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	isAuth: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
};

function Navigation(props, context) {
	const {
		classes,
		isAuth,
		logout,
	} = props;

	// unauthorized navigation links
	const registerLink = {
		id: shortid.generate(),
		link: '/register',
		showWithAuth: 'false',
		title: 'Register',
	};

	const logInLink = {
		id: shortid.generate(),
		link: '/login',
		showWithAuth: 'false',
		title: 'Login',
	};

	// authorized navigation links
	const todosLink = {
		id: shortid.generate(),
		link: '/todos',
		showWithAuth: 'true',
		title: 'Todos',
	};

	const logOutLink = {
		id: shortid.generate(),
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
			{ [todosLink, logInLink, registerLink].map(item => (
				<span key={item.id} style={displayLogic(item)}>
					<NavLink to={item.link} className={classes.root} activeClassName={classes.active}>
						<ListItem className={classes.root} button>
							<ListItemIcon>
								<Circle />
							</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItem>
					</NavLink>
				</span>
			)) }

			<span style={displayLogic(logOutLink)}>
				<ListItem button onClick={handleLogout}>
					<ListItemIcon>
						<Circle />
					</ListItemIcon>
					<Typography variant="h6" color="inherit" noWrap>
						{logOutLink.title}
					</Typography>
				</ListItem>
			</span>
		</List>
	);
}

Navigation.propTypes = propTypes;

Navigation.contextTypes = { router: PropTypes.object.isRequired };

export default withStyles(theme => ({
	root: {
		textDecoration: 'none',
		width: '100%',
	},
	active: { background: 'aliceblue' },
}))(Navigation);

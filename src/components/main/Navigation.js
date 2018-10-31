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

function Navigation(props, context) {
	const {
		classes, 
		isAuth, 
		logout, 
		toggle,
	} = props;
	// unauthorized navigation links
	const registerLink = {
		id: shortid.generate(),
		showWithAuth: 'false',
		link: '/register',
		title: 'Register',
	};

	const logInLink = {
		id: shortid.generate(),
		showWithAuth: 'false',
		link: '/login',
		title: 'Login',
	};

	// authorized navigation links
	const todosLink = {
		id: shortid.generate(),
		showWithAuth: 'true',
		link: '/todos',
		title: 'Todos',
	};

	const logOutLink = {
		id: shortid.generate(),
		showWithAuth: 'true',
		link: '#',
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
		<List onClick={toggle}>

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

			<span style={displayLogic(logOutLink)} onClick={handleLogout}>
				<ListItem button>
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

Navigation.propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	isAuth: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
	isAuth: false,
	logout: f => 'Default action: Navbar logout fn',
};

Navigation.contextTypes = { router: PropTypes.object.isRequired };

export default withStyles(theme => ({
	root: {
		textDecoration: 'none',
		width: '100%',
	},
	active: { background: 'aliceblue' },
}))(Navigation);

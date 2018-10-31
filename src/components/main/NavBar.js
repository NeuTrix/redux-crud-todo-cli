import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import Navigation from './Navigation'; // Navigation menu items

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	container: PropTypes.instanceOf(Object),
	isAuth: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
	theme: PropTypes.instanceOf(Object).isRequired,
};

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
		};
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
	}

	handleDrawerToggle(e) {
		e.preventDefault();
		this.setState(previousState => ({ showMenu: !previousState.showMenu }));
	}

	render() {
		const { showMenu } = this.state;
		const {
			isAuth, classes, container, logout, theme,
		} = this.props;

		const drawer = (
			<div>
				<div className={classes.toolbar} />
				<Divider />
				<Navigation
					isAuth={isAuth}
					logout={logout}
					toggle={this.handleDrawerToggle}
				/>
				<Divider />
			</div>
		);

		return (
			<div className={classes.root} >
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							className={classes.menuButton}
							onClick={this.handleDrawerToggle}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer}>
					<Hidden implementation="css">
						<Drawer
							id="mainDrawer"
							container={container}
							variant="temporary"
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={showMenu}
							classes={{ paper: classes.drawerPaper }}
							ModalProps={{ keepMounted: true }} // Better open performance on mobile.
							onClose={this.handleDrawerToggle}
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
			</div>
		);
	}
}

const drawerWidth = 264;

const styles = theme => ({
	appBar: {
		display: 'flex'
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			flexShrink: 0,
			width: drawerWidth,
		},
	},
	drawerPaper: {
		width: drawerWidth,
	},
	root: { display: 'flex' },
	menuButton: {
		color: theme.palette.contrast, // custom theme prop
		marginRight: 20,
	},
	toolbar: theme.mixins.toolbar,
});

NavBar.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(NavBar);

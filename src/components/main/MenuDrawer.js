import React, { Component } from 'react';
import PropTypes from 'prop-types';
// === MUI components ===
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import Navigation from './Navigation';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	menuButton: {
		marginRight: 20,
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
});

const propTypes = {
	auth: PropTypes.bool.isRequired,
	classes: PropTypes.instanceOf(Object).isRequired,
	container: PropTypes.instanceOf(Object).isRequired,
	logout: PropTypes.func.isRequired,
	theme: PropTypes.instanceOf(Object).isRequired,
};

const defaultProps = {
  container: {}, // ??? object from @MUI 
  auth: false, // authorization object from store
  logout: f => f, // function to logout user
}

class MenuDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileOpen: false,
		};
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
	}

	handleDrawerToggle(e) {
		e.preventDefault();
		this.setState(previousState => ({ mobileOpen: !previousState.mobileOpen }));
	}

	render() {
		const { mobileOpen } = this.state;
		const {
			auth, classes, container, logout, theme,
		} = this.props;

		const drawer = (
			<div>
				<div className={classes.toolbar} />
				<Divider />
				<Navigation
					auth={auth}
					logout={logout}
					toggle={this.handleDrawerToggle}
				/>
				<Divider />
			</div>
		);

		return (
			<div className={classes.root}>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.handleDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>

					</Toolbar>
				</AppBar>
				<nav className={classes.drawer}>
					<Hidden smUp implementation="css">
						<Drawer
							container={container}
							variant="temporary"
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={mobileOpen}
							onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								// Better open performance on mobile.
								keepMounted: true,
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Drawer
							classes={{
								paper: classes.drawerPaper,
							}}
							variant="permanent"
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
			</div>
		);
	}
}

MenuDrawer.propTypes = propTypes;
MenuDrawer.defaultProps = defaultProps;

export default withStyles(styles, { withTheme: true })(MenuDrawer);

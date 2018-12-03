import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Navigation from './Navigation';

const styles = theme => ({
	root: {
		color: '#fafafa',
		background: 'yellow',
	},
	//  burger: { color: '#fafafa' },
});

function MenuBar(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			{/* <IconButton > */}
			<IconButton className={classes.burger}>
				<MenuIcon />
			</IconButton>

		</div>
	);
}

export default withStyles(styles)(MenuBar);

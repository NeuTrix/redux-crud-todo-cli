import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MediaCard from '../buttons/MediaCard';

const propTypes = {
	authorized: PropTypes.bool.isRequired,
	classes: PropTypes.instanceOf(Object).isRequired,
};

const Home = ({ authorized, classes }) => {
	const loginButton = (
		<NavLink to="/login">
			<Button
				className={classes.button}
				color="primary"
				component="button"
				variant="contained"
			>
				{'Login'}
			</Button>
		</NavLink>
	);

	const registerButton = (
		<NavLink to="/login">
			<Button
				className={classes.button}
				color="primary"
				component="button"
				type="submit"
				variant="contained"
			>
				{'Register'}
			</Button>
		</NavLink>
	);

	return (
		<div className={classes.grid}>

			<Typography
				className={classes.mainTitle}
				variant="h4"
			>
				{'Welcome to Done'}
			</Typography>

			<Typography
				className={classes.subTitle}
				variant="h6"
			>
				{'a full-stack React | Redux toy app'}
			</Typography>
			<div className={classes.cardsDisplay}>
				<div className={classes.tiles}><MediaCard label="Be" /></div>
				<div className={classes.tiles}><MediaCard label="Ce" /></div>
				<div className={classes.tiles}><MediaCard label="De" /></div>
				<div className={classes.tiles}><MediaCard label="Ee" /></div>
			</div>
			<div className={classes.buttonDisplay}>
				<div>{ !authorized && loginButton }</div>
				<div>{ !authorized && registerButton }</div>
			</div>
		</div>
	);
};

const areaWidth = 500;

const styles = theme => ({
	button: {
		width: 100,
		color: 'white',
	},

	buttonDisplay: {
		background: 'lime',
		display: 'flex',
		gridArea: 'buttonDisplay',
		justifyContent: 'space-around',
		width: 'inherit',
	},
	// The media card display section
	cardsDisplay: {
		background: 'orangered',
		display: 'flex',
		flexWrap: 'wrap',
		placeContent: 'center',
		gridArea: 'cardsDisplay',
		padding: 25,
	},

	grid: {
		display: 'grid',
		gridTemplateAreas: `
			"mainTitle"
			"subTitle"
			"cardsDisplay"
			"buttonDisplay"
		`,
		gridColumnGap: '50px',
		placeItems: 'center',
		width: areaWidth,

	},

	login: {
		gridArea: 'login',
	},
	mainTitle: {
		gridArea: 'mainTitle',
	},
	placeItems: 'center',
	subTitle: {
		gridArea: 'subTitle',
	},
	tiles: {
		border: '3px solid purple',
		float: 'left',
	},

});

Home.propTypes = propTypes;

export default withStyles(styles)(Home);

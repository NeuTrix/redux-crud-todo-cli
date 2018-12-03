import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '../buttons/Card';

const propTypes = {
	authorized: PropTypes.bool.isRequired,
	classes: PropTypes.instanceOf(Object).isRequired,
};

const Home = ({ authorized, classes }) => {
	const loginButton = (
		<Button
			className={classes.button}
			color="primary"
			component="button"
			variant="contained"
		>
			<NavLink to="/login">Login</NavLink>
		</Button>
	);

	const registerButton = (
		<Button
			className={classes.button}
			color="primary"
			component="button"
			type="submit"
			variant="contained"
		>
			{'Register'}
		</Button>
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
			<div className={classes.codeCards}>
				<div className={classes.tiles}><Card/></div>
				<div className={classes.tiles}><Card/></div>
				<div className={classes.tiles}><Card/></div>
				<div className={classes.tiles}><Card/></div>
				
			</div>
			<div className={classes.button}>
				{ !authorized && loginButton }
				{ !authorized && registerButton }
			</div>
		</div>
	);
};

const styles = theme => ({
	button: {
		gridArea: 'button',
	},
	codeCards: {
		background: 'orangered',
		display: 'inline-block',
		gridArea: 'codeCards',
		width: 350,
		padding: 25,
	},

	grid: {
		display: 'grid',
		gridTemplateAreas: `
			"mainTitle"
			"subTitle"
			"codeCards"
			"button"
		`,
		gridColumnGap: '50px',
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
		// gridArea: ''
		float: 'left',
		border: '3px solid purple',
	}

});

Home.propTypes = propTypes;

export default withStyles(styles)(Home);

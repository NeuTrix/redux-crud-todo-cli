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
			className={classes.login}
			color="primary"
			component="button"
			variant="contained"
		>
			<NavLink to="/login">Login</NavLink>
		</Button>
	);

	const registerButton = (
		<Button
			className={classes.register}
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
				className={classes.subtitle}
				variant="h4"
			>
				{'Welcome to Done'}
			</Typography>

			<Typography
				className={classes.subtitle}
				variant="h6"
			>
				{'a full-stack React | Redux toy app'}
			</Typography>

			<Card className={classes.react} />
			<Card className={classes.react} />
			<Card className={classes.react} />
			<Card className={classes.react} />
			<Card className={classes.react} />

			{ !authorized && loginButton }
			{ !authorized && registerButton }

		</div>
	);
};

const styles = theme => ({
	grid: {
		gridTemplateAreas: `
			'title title title title title'
			'subtitle subtitle subtitle subtitle subtitle'
			'react redux grid mongo express'
			'. login . register .'
		`,
		gridColumnGap: '50px',
	},

	react: {

	},

	redux: {

	},

	mongo: {

	},

	express: {

	},

	login: {
		gridArea: 'redux'
	},

	register: {

	},

});

Home.propTypes = propTypes;

export default withStyles(styles)(Home);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '../buttons/Card';
import SubmitButton from '../buttons/SubmitButton';

const propTypes = {
	authorized: PropTypes.bool.isRequired,
	classes: PropTypes.instanceOf(Object).isRequired,
};

const loginButton = (
	<SubmitButton
		color="secondary"
		label="Login"
	>
		<NavLink to="/login"/>
	</SubmitButton>
);

const registerButton = (
	<SubmitButton
		color="primary"
		label="Register"
	>
		<NavLink to="/register"/>
	</SubmitButton>
);

const Home = ({ authorized, classes }) => (
		<div className={classes.grid} >

			<Typography 
				className={classes.subtitle}
				variant="h4"
			>
				Welcome to Done
			</Typography>  

			<Typography 
				className={classes.subtitle}
				variant="h6"
			> 
				a full-stack React | Redux toy app
			</Typography>  

			<Card className={classes.react} />

			{ !authorized && loginButton }
			{ !authorized && registerButton }

		</div>
	);

const styles = {
	grid: {
		gridTemplateAreas: `
			'title title title title title'
			'subtitle subtitle subtitle subtitle subtitle'
			'react redux grid mongo express'
			'. login . register .'
		`,
	},

	react: {

	},

	redux: {

	},

	mongo: {

	},

	express: {

	},

};

Home.propTypes = propTypes;

export default withStyles(styles)(Home);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '../buttons/Card';
import { NavLink } from 'react-router-dom';
import SubmitButton from '../buttons/SubmitButton';

const propTypes = {
	authorized: PropTypes.bool.isRequired,
	classes: PropTypes.instanceOf(Object).isRequired,
}

const loginButton = (
	<div>
		Login
	</div>
)

const registerButton= (
	<div>
		Register
	</div>
)

const Home = ({ authorized, classes }) => {

	return (
		<div className={classes.grid} >

			<Typography 
				className={classes.subtitle}
				variant="h3"
			>
				React-Todo 
				toy app
			</Typography>  

			<Typography 
				className={classes.subtitle}
				variant="h6"
			> 
				Fullstack MERN CRUD web app featuring:
			</Typography>  

			<Card className={classes.react} />

			{ !authorized && loginButton }
			{ !authorized && registerButton }

		</div>
	);
};

const styles = {
	grid: {
		gridTemplateAreas:`
			'title title title title title'
			'subtitle subtitle subtitle subtitle subtitle'
			'react redux grid mongo express'
			'. login . register .'
		`
	},

	react: {

	} ,

	redux: {

	},

	grid: {

	},

	mongo: {

	},

	express: {

	},

}

Home.propTypes = propTypes

export default withStyles(styles)(Home);
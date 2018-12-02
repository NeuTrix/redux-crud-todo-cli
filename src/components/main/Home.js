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
				className={classes.mainTitle}
				variant="h4"
			>
				{'Welcome to Done'}
			</Typography>

			<Typography
				className = {
					classes.subTitle
				}
				variant="h6"
			>
				{'a full-stack React | Redux toy app'}
			</Typography>

			<Card className={classes.card} />
			<Card className={classes.card} />
			<Card className={classes.card} />
			<Card className={classes.card} />

			{ !authorized && loginButton }
			{ !authorized && registerButton }

		</div>
	);
};

const styles = theme => ({
	button: {
		gridArea: 'button',
	},
	card: {
		gridArea: 'card',
		width: 100,
	},

	grid: {
		gridTemplateAreas: `
			'mainTitle'
			'subTitle'
			'card'
			'button'
		`,
		gridColumnGap: '50px',
		[theme.breakpoints.up('sm')]: {
			
		},
	},

	login: {
		gridArea: 'login'
	},
	mainTitle: {
		gridArea: 'mainTitle',
	},
	subTitle: {
		gridArea: 'subTitle',
	},

});

Home.propTypes = propTypes;

export default withStyles(styles)(Home);

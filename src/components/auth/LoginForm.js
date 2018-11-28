import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ProgressBar from '../buttons/ProgressBar';
// import validateInput from '../../helpers/loginValidator';

const propTypes = {
	// addFlashMessage: PropTypes.func.isRequired,
	// authApi: PropTypes.instanceOf(Object).isRequired,
	classes: PropTypes.instanceOf(Object).isRequired,
	errors: PropTypes.instanceOf(Object).isRequired,
	isLoading: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	// userLoginRequest: PropTypes.func.isRequired,
};

const contextTypes = {
	router: PropTypes.instanceOf(Object).isRequired,
};

const Loginform = (props) => {
	const {
		classes,
		errors,
		// identifier,
		isLoading, //
		onSubmit,
		onChange,
		// password,
	} = props;

	const formTitle = (
		<Typography variant="h4" color="secondary">
			{ 'Login' }
		</Typography>
	);

	return (
		<FormControl
			className={`{loginGrid ${classes.grid}`}
			component="form"
			onSubmit={onSubmit}
		>
			<div
				className={`{loginTitle ${classes.loginTitle}`}
				variant="h2"
				color="secondary"
			>
				{ isLoading ? <ProgressBar /> : formTitle }
			</div>

			<TextField
				className={`{email ${classes.email}`}
				errors={errors.identifier}
				label="Username | Email"
				margin="normal"
				name="identifier"
				placeholder="enter username or email"
				required
				variant="outlined"
				onChange={onChange}
			/>

			<TextField
				className={`{password ${classes.password}`}
				errors={errors.password}
				label="Password"
				margin="normal"
				name="password"
				placeholder="enter password"
				required
				type="password"
				variant="outlined"
				onChange={onChange}
			/>
			<Link
				className={classes.regLink}
				to="/register"
			>
				<Typography>
					{'Click here for a new account'}
				</Typography>
			</Link>

			<Button
				className={`{submit ${classes.button}`}
				color="primary"
				component="button"
				disabled={isLoading}
				name="Log in"
				size="small"
				type="submit"
				variant="contained"
			>
				{'Go'}
			</Button>
		</FormControl>
	);
};

const styles = theme => ({
	button: {
		color: '#fafafa',
		gridArea: 'button',
		marginTop: theme.spacing.unit * 2,
		placeSelf: 'center',
		width: 100,
	},
	email: { gridArea: 'email' },
	grid: {
		border: `1px solid ${theme.palette.primary.main}`,
		borderRadius: 5,
		display: 'grid',
		gridRowGap: theme.spacing.unit * 4,
		gridTemplateAreas: ` 
			'loginTitle'
			'email'
			'password'
			'button'
			'regLink'
		`,
		padding: 20,
		width: 300,
		[theme.breakpoints.up('lg')]: {
			width: 500,
		},
	},
	input: { display: 'none' },
	loginTitle: { gridArea: 'loginTitle' },
	password: { gridArea: 'password' },
	regLink: {
		gridArea: 'regLink',
		paddingTop: 25,
		placeSelf: 'center',
	},
});

Loginform.propTypes = propTypes;
Loginform.contextTypes = contextTypes;

export default withStyles(styles)(Loginform);

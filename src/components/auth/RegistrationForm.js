import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import InputField from './InputField';
import ProgressBar from '../buttons/ProgressBar';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	isLoading: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

const contextTypes = {
	router: PropTypes.instanceOf(Object).isRequired,
};

const Loginform = (props) => {
	const {
		classes,
		isLoading,
		onSubmit,
		onChange,
	} = props;

	const formTitle = (
		<Typography variant="h4" color="secondary">
			{ 'Sign Up!' }
		</Typography>
	);

	return (
		<FormControl
			className={classes.grid}
			component="form"
			onSubmit={onSubmit}
		>
			<div className={classes.title} color="secondary">
				{ isLoading ? <ProgressBar /> : formTitle }
			</div>
			<InputField
			// required
				className={classes.username}
				label="Enter Username"
				name="username"
				onChange={onChange}
			/>

			<InputLabel className={classes.email}> Enter Email </InputLabel>
			<Input
				className={`{email ${classes.email}`}
				name="email"
				required
				type="email"
				onChange={onChange}
			/>

			<InputLabel className={classes.emailConfirm}> Confirm Email </InputLabel>
			<Input
				className={`{email ${classes.emailConfirm}`}
				name="emailConfirm"
				required
				type="email"
				onChange={onChange}
			/>
			<InputLabel className={classes.password}> Enter Password </InputLabel>
			<Input
				className={`{password ${classes.password}`}
				name="password"
				required
				type="password"
				onChange={onChange}
			/>

			<InputLabel className={classes.passwordConfirm}> Confirm Password </InputLabel>
			<Input
				className={`{password ${classes.passwordConfirm}`}
				name="passwordConfirm"
				required
				type="password"
				onChange={onChange}
			/>

			<Button
				className={classes.button}
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
	email: {
		gridArea: 'email',
	},
	emailConfirm: {
		gridArea: 'emailConfirm',
	},
	grid: {
		border: `1px solid ${theme.palette.primary.main}`,
		borderRadius: 5,
		display: 'grid',
		gridRowGap: '10px',
		gridTemplateAreas: ` 
			'title'
			'username'
			'email'
			'emailConfirm'
			'password'
			'passwordConfirm'
			'button'
		`,
		padding: 20,
		width: 300,
		[theme.breakpoints.up('lg')]: { width: 500 },
	},
	title: {
		gridArea: 'title',
		minHeight: 69,
	},
	username: {
		gridArea: 'username',
	},
	password: {
		gridArea: 'password',
	},
	passwordConfirm: {
		gridArea: 'passwordConfirm',
	},
});

Loginform.propTypes = propTypes;
Loginform.contextTypes = contextTypes;

export default withStyles(styles)(Loginform);

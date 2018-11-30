import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
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

const RegistrationForm = (props) => {
	const {
		classes,
		isLoading,
		onSubmit,
		onChange,
	} = props;

	const formTitle = (
		<Typography variant="h4" color="secondary">
			{ 'Register...' }
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
				autoFocus
				className={classes.username}
				label="Create a Username"
				name="username"
				required
				onChange={onChange}
			/>

			<InputField
				className={classes.email}
				label="Enter Email"
				name="email"
				required
				type="email"
				onChange={onChange}
			/>

			<InputField
				className={classes.emailConfirm}
				label="Confirm Email"
				name="emailConfirm"
				required
				type="email"
				onChange={onChange}
			/>

			<InputField
				className={classes.password}
				label="Create a Password"
				name="password"
				required
				type="password"
				onChange={onChange}
			/>

			<InputField
				className={classes.passwordConfirm}
				label="Confirm Password"
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
				type="submit"
				variant="contained"
			>
				{'Submit'}
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

RegistrationForm.propTypes = propTypes;
RegistrationForm.contextTypes = contextTypes;

export default withStyles(styles)(RegistrationForm);

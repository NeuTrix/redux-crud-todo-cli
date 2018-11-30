import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
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
			className={`{loginGrid ${classes.grid}`}
			component="form"
			onSubmit={onSubmit}
		>
			<div className={classes.title} color="secondary">
				{ isLoading ? <ProgressBar /> : formTitle }
			</div>

			<InputLabel className={classes.username} > Username </InputLabel>

			<Input
				className={classes.username}
				name="username"
				placeholder="enter a username"
				required
				onChange={onChange}
			/>

			<Input
				className={`{email ${classes.email}`}
				label="Email"
				margin="normal"
				name="identifier"
				placeholder="enter your email "
				required
				type="email"
				variant="outlined"
				onChange={onChange}
			/>

			<Input
				className={`{email ${classes.emailConfirm}`}
				label="Confirm Email"
				margin="normal"
				name="identifier"
				placeholder="confirm your email"
				required
				type="email"
				variant="outlined"
				onChange={onChange}
			/>

			<Input
				className={`{password ${classes.password}`}
				label="Password"
				margin="normal"
				name="password"
				placeholder="enter password"
				required
				type="password"
				variant="outlined"
				onChange={onChange}
			/>

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
		gridRowGap: '25px',
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

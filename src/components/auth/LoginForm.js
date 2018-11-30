import React from 'react';
import { Link } from 'react-router-dom';
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

const Loginform = (props) => {
	const {
		classes,
		isLoading,
		onSubmit,
		onChange,
	} = props;

	const formTitle = (
		<Typography variant="h4" color="secondary">
			{ 'Login' }
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
				className={classes.email}
				label="Username -or- Email"
				name="identifier"
				required
				onChange={onChange}
			/>

			<InputField
				className={classes.password}
				label="Password"
				name="password"
				required
				type="password"
				onChange={onChange}
			/>

			<Link className={classes.regLink} to="/register">
				<Typography> Click here for a new account </Typography>
			</Link>

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
	grid: {
		border: `1px solid ${theme.palette.primary.main}`,
		borderRadius: 5,
		display: 'grid',
		gridRowGap: '25px',
		gridTemplateAreas: ` 
			'title'
			'email'
			'password'
			'button'
			'regLink'
		`,
		padding: 20,
		width: 300,
		[theme.breakpoints.up('lg')]: { width: 500 },
	},
	password: {
		gridArea: 'password',
	},
	regLink: {
		gridArea: 'regLink',
		paddingTop: 25,
		placeSelf: 'center',
	},
	title: {
		gridArea: 'title',
		minHeight: 69,
	},
});

Loginform.propTypes = propTypes;
Loginform.contextTypes = contextTypes;

export default withStyles(styles)(Loginform);

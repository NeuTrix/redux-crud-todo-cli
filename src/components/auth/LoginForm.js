import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import functions
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import ProgressBar from '../buttons/ProgressBar';
import validateInput from '../../helpers/loginValidator';
import { colors } from '../../helpers/cssConstants';

const propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	authApi: PropTypes.instanceOf(Object).isRequired,
	classes: PropTypes.instanceOf(Object).isRequired,
	userLoginRequest: PropTypes.func.isRequired,
};

const contextTypes = {
	router: PropTypes.instanceOf(Object).isRequired,
};

class Loginform extends Component {
	constructor(props, context) {
		super(props, context);
		const { authApi } = this.props;
		this.state = {
			errors: { },
			identifier: '',
			isLoading: authApi.loginIsPosting,
			password: '',
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		const { router } = this.context;
		const { addFlashMessage, userLoginRequest } = this.props;

		e.preventDefault();

		if (this.isValid()) {
			// reset state if no errors
			this.setState({ errors: { }, isLoading: true });
			// pass the state forward for a login ...
			userLoginRequest(this.state)
				.then((res) => {
					addFlashMessage({
						text: `Hi ${res.data.username}! You're Logged In.`,
						type: 'success',
					});
					router.history.push('/todos');
					return res;
				})
				.catch((err) => {
					this.setState({ errors: err, isLoading: false });
					addFlashMessage({
						text: 'Invalid username, id or password. Try again.',
						type: 'error',
					});
				});
		}
	}

	isValid() {
		// collect the return objects from #validateInput
		const { errors, isValid } = validateInput(this.state);
		if (!isValid) {
			this.setState({ errors });
		}
		return isValid; // a boolean value from #validateInput
	}

	render() {
		const { classes } = this.props;
		const { errors, identifier, password, isLoading } = this.state;

		return (
			<FormControl
				className={`{loginGrid ${classes.grid}`}
				component="form"
				onSubmit={this.onSubmit}
			>
				<div
					className={`{loginTitle ${classes.loginTitle}`}
					variant="h2"
					color="secondary"
				>
					{ !isLoading
						? (
							<Typography variant="h4" color="secondary">
								{'Login'}
							</Typography>
						)
						: <ProgressBar />
					}
				</div>

				<TextField
					className={`{email ${classes.email}`}
					errors={errors.identifier}
					label="Username | Email"
					margin="normal"
					name="identifier"
					placeholder="enter username or email"
					required
					value={identifier}
					variant="outlined"
					onChange={this.onChange}
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
					value={password}
					variant="outlined"
					onChange={this.onChange}
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
	}
}

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
		border: `1px solid ${colors._mintgreen}`,
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

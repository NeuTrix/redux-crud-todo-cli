import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import functions
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ProgressBar from '../buttons/ProgressBar';
import validateInput from '../../helpers/loginValidator';
import { colors, media } from '../../helpers/cssConstants';

const propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	authApi: PropTypes.instanceOf(Object).isRequired,
	classes: PropTypes.instanceOf(Object).isRequired,
	userLoginRequest: PropTypes.func.isRequired,
};

const contextTypes = {
	router: PropTypes.instanceOf(Object).isRequired,
};

const defaultProps = {
	addFlashMessage: f => f,
	authApi: { loginIsPosting: false },
	className: '',
	currUser: { },
	userLoginRequest: f => f,
};

// +++++++++  COMPONENT  +++++++++
class Loginform extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			identifier: '',
			password: '',
			errors: { },
			isLoading: this.props.authApi.loginIsPosting,
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();
		// upon a valid set of inputs
		if (this.isValid()) {
			// reset state if no errors
			this.setState({ errors: { }, isLoading: true });
			// pass the state forward for a login ...
			this.props.userLoginRequest(this.state)
				.then((res) => {
					this.props.addFlashMessage({
						type: 'success',
						text: `Hi ${res.data.username}! You're Logged In.`,
					});
					this.context.router.history.push('/todos');
					return res;
				})
				.catch((err, res) => {
					// console.log(err)
					this.setState({ errors: err, isLoading: false });
					this.props.addFlashMessage({
						type: 'error',
						text: 'Invalid username, id or password. Try again.',
					});
				});
		}
	}

	isValid() {
		// collect the return objects from #validateInput
		const { errors, isValid } = validateInput(this.state);
		if (!isValid) {
			this.setState({ errors }); // if errors, pass, to state
		}
		return isValid; // a boolean value from #validateInput
	}

	render() {
		const { classes } = this.props;
		const {
			errors, identifier, password, isLoading,
		} = this.state;

		return (
			<div
				className={`{loginGrid ${classes.grid}`}
				onSubmit={this.onSubmit}
			>
				<div
					className={`{loginTitle ${classes.loginTitle}`}
					variant="h2"
					color="secondary"
				>
					{ !isLoading
						? (
							<Typography
								variant="title"
								color="secondary"
							>
								{'Login'}
							</Typography>
						)
						: <ProgressBar color="greenyellow" />
					}
				</div>

				<TextField
					className={`{email ${classes.email}`}
					errors={errors.identifier}
					InputLabelProps={stylesInput}
					label="Username | Email"
					margin="normal"
					name="identifier"
					placeholder="enter username or email"
					required
					// type='email'
					value={identifier}
					variant="outlined"
					onChange={this.onChange}
				/>

				<TextField
					className={`{password ${classes.password}`}
					errors={errors.password}
					InputLabelProps={stylesInput}
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
					className={`{submit ${classes.submit}`}
					color="primary"
					disabled={isLoading}
					name="Log in"
					size="small"
					type="submit"
					variant="contained"
				>
					Go


				
</Button>
			</div>
		);
	}
}

const RegLink = styled(Link)`
	grid-area: link;
	padding-top: 25px;
	place-self: center; 
`;

// custom component styling
const stylesInput = {
	style: {
		background: colors._white,
	},
};

const styles = theme => ({
	button: {
		color: '#fafafa',
		margin: theme.spacing.unit,
	},
	email: { gridArea: 'email' },
	grid: {
		border: `1px solid ${colors._mintgreen}`,
		borderRadius: 5,
		color: `${colors._mintgreen}`,
		display: 'grid',
		gridRowGap: 15,
		gridTemplateAreas: ` 
			'loginTitle'
			'email'
			'password'
			'submit'
			'regLink'
		`,
		padding: 20,
		width: 300,
		[theme.breakpoints.up('lg')]: {
			width: 500,
		},
	},
	input: {
		display: 'none',
	},
	loginTitle: { gridArea: 'loginTitle' },
	regLink: { gridArea: 'regLink' },
	password: { gridArea: 'password' },
	submit: { gridArea: 'submit' },

});

Loginform.propTypes = propTypes;
Loginform.defaultProps = defaultProps;
Loginform.contextTypes = contextTypes;

export default withStyles(styles)(Loginform);

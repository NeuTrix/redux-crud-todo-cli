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
	className: PropTypes.string.isRequired, // from styled-components
	currUser: PropTypes.instanceOf(Object).isRequired,
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
		const {
			classes, errors, identifier, password, isLoading,
		} = this.state;

		return (
			<div
				className={`{LoginTest ${classes.grid}`}
				onSubmit={this.onSubmit}
			>
				<Title
					className="title"
					variant="h2"
					color="secondary"
				>
					{ !isLoading ? 'Login' : <ProgressBar color="greenyellow" /> }
				</Title>

				<Email
					InputLabelProps={stylesInput}
					className="email"
					errors={errors.identifier}
					label="Username | Email"
					margin="normal"
					name="identifier"
					onChange={this.onChange}
					placeholder="enter username or email"
					required
					// type='email'
					value={identifier}
					variant="outlined"
				/>

				<Pword
					InputLabelProps={stylesInput}
					className="password"
					errors={errors.password}
					label="Password"
					margin="normal"
					name="password"
					onChange={this.onChange}
					placeholder="enter password"
					required
					type="password"
					value={password}
					variant="outlined"
				/>
				<RegLink to="/register" className="regLink">
					Click here for a new account


    </RegLink>

				<Submit
					// className={ this.props.classes.button}
					color="primary"
					disabled={isLoading}
					name="Log in"
					size="small"
					type="submit"
					variant="contained"
				>
					Go


    </Submit>
			</div>
		);
	}
}


const Title = styled(Typography)`
	grid-area: title;
`;
const Email = styled(TextField)`
	grid-area: email;
`;
const Pword = styled(TextField)`
	grid-area: pword;
`;
const Submit = styled(Button)`
	grid-area: submit;
`;
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
	grid: {
		border: `1px solid ${colors._mintgreen}`,
		borderRadius: 5,
		color: `${colors._mintgreen}`,
		display: 'grid',
		gridRowGap: 15,
		gridTemplateAreas: ` 
			'title'
			'email'
			'pword'
			'submit'
			'link'
		`,
		padding: 20,
		width: 300,

		[`@media (${media._large})`]: {
			width: 500,
		},
	},
	input: {
		display: 'none',
	},
});

Loginform.propTypes = propTypes;
Loginform.defaultProps = defaultProps;
Loginform.contextTypes = contextTypes;

export default withStyles(styles)(Loginform);

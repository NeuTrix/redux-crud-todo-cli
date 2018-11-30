import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled	from 'styled-components';
// custom
import { withStyles } from '@material-ui/core/styles';
import validateInput from '../../helpers/signupValidator';
import TextFieldGroup from './TextFieldGroup';
import Spinner from '../buttons/Spinner';
import { colors, media } from '../../helpers/cssConstants';
import ProgressBar from '../buttons/ProgressBar';

// +++++++++  CSS  +++++++++
const baseColor = colors._deepblue;

// const Grid = styled.form`
// 	display: grid;
// 	grid-template-areas: 
// 		"title"
// 		"user"
// 		"email"
// 		"emConf"
// 		"pword"
// 		"pwConf"
// 		"submit"
// 	;
// 	grid-row-gap: 10px;
// 	border: 1px solid steelblue;
// 	color: ${baseColor};
// 	padding: 20px;
// 	width: 300px;
// 	font-size: 1.0em;

// 	@media (${media._large}) {
// 		width: 500px;
// 	}
`;

// const Title = styled.div`
// 	gride-area: title;
// `;

// const User = styled(TextFieldGroup)`
// 	gride-area: user;
// `;

// const Email = styled(TextFieldGroup)`
// 	gride-area: email;
// `;

// const EmailConf = styled(TextFieldGroup)`
// 	gride-area: emConf;
// `;

// const Pword = styled(TextFieldGroup)`
// 	gride-area: pword;
// `;

// const PwordConf = styled(TextFieldGroup)`
// 	gride-area: pwConf;
// `;

// const Submit = styled.button`
// 	gride-area: submit;
// 	font-weight: bold;
// 	font-size: 1.0em;
// 	height: 35px;
// 	width: 90px;
// 	background: aliceblue;
// 	border: 4px solid ${baseColor};
// 	border-radius: 4px;
// 	color: ${baseColor}
// `;

// +++++++++  COMPONENT  +++++++++

class RegisterForm extends Component {
	constructor(props, context) {
		super(props, context);
		// this.state = {
		// 	email: '',
		// 	emailConfirm: '',
		// 	errors: { },
		// 	isLoading: this.props.authApi.registerIsPosting,
		// 	password: '',
		// 	passwordConfirm: '',
		// 	username: '',
		// };

		// this.onChange = this.onChange.bind(this);
		// this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		// e.preventDefault();
		// this.setState({ [e.target.name]: e.target.value });
	}

	// isValid() {
	// 	const { errors, isValid } = validateInput(this.state);
	// 	if (!isValid) {
	// 		this.setState({ errors });
	// 	}
	// 	return isValid;
	// }

	onSubmit(e) {
		e.preventDefault();

		// if (this.isValid()) {
		// 	this.setState({ errors: { }, isLoading: true }); // reset state
			
			this.props.userSignupRequest(this.state)
				.then((res) => {
					this.props.addFlashMessage({
						type: 'success',
						// text: `Welcome ${res.data.username} ! You have successfully Registered and Logged In.`,
					});
					// this.context.router.history.push('/todos');
				})
				.catch((err) => {
					this.props.addFlashMessage({
						// type: 'error',
						// text: `WARNING! Something went wrong.  Please try again:   ${ err }.`
						// text: 'Error: email or userid already taken. Please try again',
					});
					this.setState({
						errors: err.data,
						isLoading: false,
					});
				});
		}
	}

	render() {
		const { classes, errors, isLoading } = this.state;

		return (

			<Grid
				id="registerForm"
				className="boxClr paper"
				onSubmit={this.onSubmit}
			>
				<Title classNam="ctr engr under">
					<h1>
						{ !isLoading ? <Spinner color={colors._iceblue} /> : 'Registration' }
					</h1>
				</Title>
				{/* <div
					className={`{loginTitle ${classes.loginTitle}`}
					variant="h2"
					color="secondary"
				>
					{ isLoading ? <ProgressBar /> : formTitle }
				</div> */}

				<User
					errors={errors.username}
					label="Username"
					name="username"
					onChange={this.onChange}
					placeholder="Enter a username"
					type="text"
					value={this.state.username}
				/>

				<Email
					errors={errors.email}
					label="Email"
					name="email"
					onChange={this.onChange}
					placeholder="Enter your email address"
					type="email"
					value={this.state.email}
				/>
				<EmailConf
					errors={errors.emailConfirm}
					name="emailConfirm"
					placeholder="Confirm your email address"
					onChange={this.onChange}
					type="email"
					value={this.state.emailConfirm}
				/>

				<Pword
					errors={errors.password}
					label="Password"
					name="password"
					onChange={this.onChange}
					placeholder="Enter your password"
					type="password"
					value={this.state.password}
				/>

				<PwordConf
					errors={errors.passwordConfirm}
					name="passwordConfirm"
					placeholder="Confirm your password"
					onChange={this.onChange}
					type="password"
					value={this.state.passwordConfirm}
				/>

				<Submit
					typ="submit"
					nam="Log in"
					disable={isLoading}
				>
					Register


				</Submit>

			</Grid>
		);
	}
}

RegisterForm.propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	authApi: PropTypes.object.isRequired,
	userSignupRequest: PropTypes.func.isRequired,
};

RegisterForm.defaultProps = {
	addFlashMessage: f => f,
	authApi: { loginIsPosting: false },
	userSignupRequest: f => f,
};

RegisterForm.contextTypes = {
	router: PropTypes.object.isRequired,
};

// export default withStyles(styles)(RegisterForm);
export default (RegisterForm);

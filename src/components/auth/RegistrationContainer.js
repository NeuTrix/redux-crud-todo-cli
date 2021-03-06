import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashActions';
import { userSignupRequest } from '../../actions/registerActions';
import RegistrationForm from './RegistrationForm';

const propTypes = {
	handleRegistration: PropTypes.func.isRequired,
	handleMessage: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	handleRegistration: userSignupRequest,
	handleMessage: addFlashMessage,
};

const contextTypes = {
	router: PropTypes.instanceOf(Object).isRequired,
};

class RegistrationContainer extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			email: '', // dervied from input
			emailConfirm: '', // dervied from input
			isLoading: false,
			password: '', // dervied from input
			passwordConfirm: '', // dervied from input
			username: '', // dervied from input
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
		const { handleMessage, handleRegistration } = this.props;

		e.preventDefault();
		// reset state if no errors
		this.setState({ isLoading: true });
		// pass the state forward for a login ...
		handleRegistration(this.state)
			.then((res) => {
				handleMessage({
					// text: `Hi ${res.data.username}! You're Logged In.`,
					text: `Welcome ${res.data.username}! You've Registered & Logged In.`,
					type: 'success',
				});
				router.history.push('/todos');
				return res;
			})
			.catch((err) => {
				this.setState({ isLoading: false });
				console.error(err);
				handleMessage({
					// text: 'Invalid username, id or password. Try again',
					text: 'Error: email or userid already taken. Please try again',
					type: 'error',
				});
			});
	}

	render() {
		const { isLoading } = this.state;
		return (
			<RegistrationForm
				isLoading={isLoading}
				onSubmit={this.onSubmit}
				onChange={this.onChange}
			/>
		);
	}
}

RegistrationContainer.propTypes = propTypes;
RegistrationContainer.contextTypes = contextTypes;

export default connect(f => f, mapDispatchToProps)(RegistrationContainer);

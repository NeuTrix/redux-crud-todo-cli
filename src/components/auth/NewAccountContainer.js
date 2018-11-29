import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashActions';
import { userSignupRequest } from '../../actions/registerActions';
import LoginForm from './LoginForm';

const propTypes = {
	handleLogin: PropTypes.func.isRequired,
	handleMessage: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	handleLogin: userSignupRequest,
	handleMessage: addFlashMessage,
};

const contextTypes = {
	router: PropTypes.instanceOf(Object).isRequired,
};

class LoginContainer extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			identifier: '', // dervied from input
			isLoading: false,
			password: '', // dervied from input
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
		const { handleMessage, handleLogin } = this.props;

		e.preventDefault();
		// reset state if no errors
		this.setState({ isLoading: true });
		// pass the state forward for a login ...
		handleLogin(this.state)
			.then((res) => {
				handleMessage({
					text: `Hi ${res.data.username}! You're Logged In.`,
					type: 'success',
				});
				router.history.push('/todos');
				return res;
			})
			.catch((err) => {
				this.setState({ isLoading: false });
				console.error(err);
				handleMessage({
					text: 'Invalid username, id or password. Try again',
					type: 'error',
				});
			});
	}

	render() {
		const { isLoading } = this.state;
		return (
			<LoginForm
				isLoading={isLoading}
				onSubmit={this.onSubmit}
				onChange={this.onChange}
			/>
		);
	}
}

LoginContainer.propTypes = propTypes;
LoginContainer.contextTypes = contextTypes;

export default connect(f => f, mapDispatchToProps)(LoginContainer);

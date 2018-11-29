import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashActions';
import { userLoginRequest } from '../../actions/loginActions';
import LoginForm from './LoginForm';

const propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	authApi: PropTypes.instanceOf(Object).isRequired,
	userLoginRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	authApi: state.authApi,
});

const contextTypes = {
	router: PropTypes.instanceOf(Object).isRequired,
};

class LoginContainer extends Component {
	constructor(props, context) {
		super(props, context);
		const { authApi } = this.props;
		this.state = {
			identifier: '', // dervied from input
			isLoading: authApi.loginIsPosting,
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
		const { addFlashMessage, userLoginRequest } = this.props;

		e.preventDefault();
		// reset state if no errors
		this.setState({ isLoading: true });
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
				this.setState({ isLoading: false });

				addFlashMessage({
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

export default connect(mapStateToProps, { addFlashMessage, userLoginRequest })(LoginContainer);

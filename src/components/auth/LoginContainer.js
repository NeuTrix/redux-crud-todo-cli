import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashActions';
import { userLoginRequest } from '../../actions/loginActions';
import validateInput from '../../helpers/loginValidator';

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
		const {
			errors,
			identifier,
			password,
			isLoading,
		} = this.state;

		return (
			<div
				isValid={this.isValid}
				onSubmit={this.onSubmit}
				onChange={this.onChange}
			>
				
				{'Hello'}
			</div>
		);
	}
}


LoginContainer.propTypes = propTypes;
LoginContainer.contextTypes = contextTypes;

export default connect(mapStateToProps, { addFlashMessage, userLoginRequest })(LoginContainer);
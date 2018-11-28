// connects to redux store and passes props to the LoginForm ...
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

const LoginPage = (props) => {
	const {
		addFlashMessage,
		authApi,
		userLoginRequest,
	} = props;
	return (
		<div >
			<LoginForm
				userLoginRequest={userLoginRequest}
				addFlashMessage={addFlashMessage}
				authApi={authApi}
			/>
		</div>
	);
};

LoginPage.propTypes = propTypes;

export default connect(mapStateToProps, { addFlashMessage, userLoginRequest })(LoginPage);

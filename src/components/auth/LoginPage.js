// connects to redux store and passes props to the LoginForm ...
import React from 'react';
import PropTypes from 'prop-types';
import LoginContainer from './LoginContainer';
// import LoginContainer from './LoginContainer';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashActions';
import { userLoginRequest } from '../../actions/loginActions';

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
			<LoginContainer
				userLoginRequest={userLoginRequest}
				addFlashMessage={addFlashMessage}
				authApi={authApi}
			/>
		</div>
	);
};

LoginPage.propTypes = propTypes;

export default connect(mapStateToProps, { addFlashMessage, userLoginRequest })(LoginPage);

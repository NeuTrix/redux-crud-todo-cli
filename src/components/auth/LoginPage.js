import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import { userLoginRequest } from '../../actions/loginActions';
import { addFlashMessage } from '../../actions/flashActions';
import { connect } from 'react-redux';

const LoginPage = (props) => {
	
	return (
		<div id = 'loginPage' style= {{ padding: 25 }}  >
			<LoginForm  className = 'box'  
				userLoginRequest = { props.userLoginRequest } 
				addFlashMessage = { props.addFlashMessage } 
			/>
		</div>
	)
}

LoginPage.propTypes = {
	userLoginRequest: PropTypes.func.isRequired,
	addFlashMessage: PropTypes.func.isRequired
};

LoginPage.defaultProps = {
	userLoginRequest: f => f,
	addFlashMessage: f => f
};

export default connect(null, { userLoginRequest, addFlashMessage })(LoginPage);
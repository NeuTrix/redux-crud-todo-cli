import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import { userLoginRequest } from '../../actions/loginActions';
import { addFlashMessage } from '../../actions/flashActions';
import { connect } from 'react-redux';

		const style = { 
			display: 'grid',
			gridTemplateAreas: `"main"`,
			gridTemplateColumn: '1fr',
			padding: 15,
			backgroundColor: 'yellow',
		};

const LoginPage = ({userLoginRequest, addFlashMessage}) => {

		return (
			<div style = { style } >
				<LoginForm className = 'box' id ='loginPage'  
					userLoginRequest = { userLoginRequest } 
					addFlashMessage = { addFlashMessage } 
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
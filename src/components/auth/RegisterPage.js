import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './RegisterForm';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashActions';
import { connect } from 'react-redux';

const RegisterPage = (props) => {

	return (
		
		<div 
			id = 'registerPage' 
			className = 'boxClr' 
			style= {{ padding: 25 }} 
		>
			<RegisterForm 
				userSignupRequest = { props.userSignupRequest } 
				addFlashMessage = { props.addFlashMessage } 
			/>
		</div>
	)
}

RegisterPage.propTypes = {
	userSignupRequest: PropTypes.func.isRequired,
	addFlashMessage: PropTypes.func.isRequired
};

RegisterPage.defaultProps = {
	userSignupRequest: f => f,
	addFlashMessage: f => f
};

export default connect(null, { userSignupRequest, addFlashMessage })(RegisterPage);
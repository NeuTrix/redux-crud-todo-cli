import React from 'react';
import PropTypes from 'prop-types';
// custom
import LoginForm from './LoginForm';
import { userLoginRequest } from '../../actions/loginActions';
import { addFlashMessage } from '../../actions/flashActions';
import { connect } from 'react-redux';

const LoginPage = (props) => {
	
	return (
		<div 
			id = 'loginPage' 
			className = 'boxClr engrBox' 
			style= {{ padding: 20 }}  
		>
			<LoginForm   
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
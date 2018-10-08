// connects to store and passes props to LoginForm ...
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// ===== import components
import LoginForm from './LoginForm';
// ===== import functions
import { addFlashMessage } from '../../actions/flashActions';
import styled from 'styled-components';
import { userLoginRequest } from '../../actions/loginActions';
// ===== CSS 
const Grid = styled.div `
	grid-template-areas: " form ";
	display: grid;
	justify-items: center;
	padding: 20px;
`;
// ===== Main Component 
const LoginPage = props => {
	const { addFlashMessage, authApi, userLoginRequest } = this.props;
	return (
		<Grid className='loginPage'>
			<LoginForm
				style={{ gridArea: 'form' }}  
				userLoginRequest={ userLoginRequest } 
				addFlashMessage={ addFlashMessage } 
				authApi={ authApi }
			/>
		</Grid>
	);
};
// ===== Props
const mapStateToProps = state => {
	return { authApi: state.authApi };
};

LoginPage.propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	// from styled-components...
	className: PropTypes.string, 
	userLoginRequest: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
	addFlashMessage: f => f,
	userLoginRequest: f => f,
};

export default connect(mapStateToProps, { userLoginRequest, addFlashMessage })(LoginPage);

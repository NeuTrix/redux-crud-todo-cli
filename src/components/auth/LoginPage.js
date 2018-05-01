import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
// custom
import LoginForm from './LoginForm';
import { userLoginRequest } from '../../actions/loginActions';
import { addFlashMessage } from '../../actions/flashActions';

const Grid = styled.div`
	display: grid;
	grid-template-areas: " form ";
	grid-template-columns: 1fr;

	justify-items: center;
	padding: 20px;
	border: darkgreen;
`;

const EntryForm = styled(LoginForm) `
	grid-area: form;
`;

const LoginPage = (props) => {
	
	return (
		<Grid 
			className = { `LoginPage ${props.className}`} 
		>
			<EntryForm  
				userLoginRequest = { props.userLoginRequest } 
				addFlashMessage = { props.addFlashMessage } 
			/>

		</Grid>
	)
}

LoginPage.propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	className: PropTypes.string.isRequired, // from styled-components
	userLoginRequest: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
	addFlashMessage: f => f,
	userLoginRequest: f => f,
};

export default connect(null, { userLoginRequest, addFlashMessage })(LoginPage);
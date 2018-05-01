import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
// custom
import RegisterForm from './RegisterForm';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashActions';
import { colors } from '../../helpers/cssConstants';

const Grid = styled.div`
	display: grid;
	grid-template-areas: " form ";
	grid-template-columns: 1fr;

	justify-items: center;
	padding: 20px;
	border: ${ colors._iceblue };
`;

const EntryForm = styled(RegisterForm) `
	grid-area: form;
`;

const RegisterPage = (props) => {

	return (
		<Grid 
			className = { `RegisterPage ${props.className}`} 
		>
			<EntryForm  
				userSignupRequest = { props.userSignupRequest } 
				addFlashMessage = { props.addFlashMessage } 
			/>
		</Grid>
	)
}

RegisterPage.propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	className: PropTypes.string.isRequired, // from styled-components
	userSignupRequest: PropTypes.func.isRequired,
};

RegisterPage.defaultProps = {
	// addFlashMessage: f => f,
	// userSignupRequest: f => f,
};

export default connect(null, { userSignupRequest, addFlashMessage })(RegisterPage);
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addFlashMessage } from '../../actions/flashActions';
import LoginForm from './LoginForm';
import { userLoginRequest } from '../../actions/loginActions';

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
			className={ `LoginPage ${props.className}`} 
		>
			<EntryForm  
				userLoginRequest={ props.userLoginRequest } 
				addFlashMessage={ props.addFlashMessage } 
				authApi={ props.authApi }
			/>

		</Grid>
	);
};

const mapStateToProps = (state) => {
	return { 
		authApi: state.authApi 
	};
};

LoginPage.propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	className: PropTypes.string, // from styled-components
	userLoginRequest: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
	addFlashMessage: f => f,
	userLoginRequest: f => f,
};

export default connect(mapStateToProps, { userLoginRequest, addFlashMessage })(LoginPage);
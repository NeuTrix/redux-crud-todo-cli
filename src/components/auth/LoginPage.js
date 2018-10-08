// connects to store and passes props to LoginForm ...
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

import { addFlashMessage } from '../../actions/flashActions';
import styled from 'styled-components';
import { userLoginRequest } from '../../actions/loginActions';

const Grid = styled.div`
	grid-template-areas: " form ";
	// grid-template-columns: 1fr;

	border: darkgreen;
	display: grid;
	justify-items: center;
	padding: 20px;
`;

const LoginPage = (props) => {
	return (
		<Grid className='LoginPage'>
			<LoginForm
				style={{ gridArea: 'form' }}  
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
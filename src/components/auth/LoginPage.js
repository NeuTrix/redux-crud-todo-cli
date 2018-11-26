// connects to redux store and passes props to the LoginForm ...
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// ===== import components
import styled from 'styled-components';
import LoginForm from './LoginForm';
// ===== import functions
import { addFlashMessage } from '../../actions/flashActions';
import { userLoginRequest } from '../../actions/loginActions';
// ===== set CSS
const Grid = styled.div`
	grid-template-areas: " form ";
	display: grid;
	justify-items: center;
	padding: 20px;
`;
// ===== main Component
const LoginPage = (props) => {
  const { addFlashMessage, authApi, userLoginRequest } = props;
  return (
    <Grid className="loginPage">
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
const mapStateToProps = state => ({ authApi: state.authApi });

LoginPage.propTypes = {
  addFlashMessage: PropTypes.func.isRequired,
  authApi: PropTypes.object.isRequired,
  // from styled-components...
  className: PropTypes.string,
  // userLoginRequest: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
  authApi: {},
  // addFlashMessage: f => f,
  // userLoginRequest: f => f,
};

export default connect(mapStateToProps, { userLoginRequest, addFlashMessage })(LoginPage);

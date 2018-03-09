import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { Col, Grid, Row } from 'react-bootstrap';
import { userSignupRequest } from '../../actions/signupActions'
// import { userLoginRequest } from '../../actions/loginActions'
import { addFlashMessage } from '../../actions/flashActions'

let userLoginRequest

class LoginPage extends Component {

  render () {

    const style = { 
      backgroundColor: '#ccffcc', 
      padding: 25,
      border: '2px solid darkgreen' 
    }

    // deconstruction
    const { userSignupRequest, userLoginRequest,addFlashMessage } = this.props;

    return (
    <Grid >
      <Row>
        <Col md = { 4 } mdoffset = { 4 }  style = { style } >
          <LoginForm 
            userSignupRequest = { userSignupRequest } 
            userLoginRequest = { userLoginRequest } 
            addFlashMessage = { addFlashMessage } 
          />
        </Col>
      </Row>
    </Grid>
    );
  }
}

LoginPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  userLoginRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

LoginPage.defaultProps = {
  userSignupRequest: f => f,
  userLoginRequest: f => f,
  addFlashMessage: f => f
}

export default connect(null, { userSignupRequest, userLoginRequest, addFlashMessage })(LoginPage);
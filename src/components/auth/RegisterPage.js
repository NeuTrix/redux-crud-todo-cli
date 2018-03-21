import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import { Col, Grid, Row } from 'react-bootstrap';
import { userSignupRequest } from '../../actions/signupActions'
import { addFlashMessage } from '../../actions/flashActions'

class RegisterPage extends Component {

  render () {

    const style = { 
      backgroundColor: 'aliceblue', 
      padding: 25,
      border: '2px solid steelblue' 
    }

    // deconstruction
    const { userSignupRequest, addFlashMessage } = this.props;

    return (
      <Grid >
        <Row>
          <Col md = { 4 } mdOffset = { 4 }  style = { style } >
            <RegisterForm 
              userSignupRequest = { userSignupRequest } 
              addFlashMessage = { addFlashMessage } 
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

RegisterPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

RegisterPage.defaultProps = {
  userSignupRequest: f => f,
  addFlashMessage: f => f
}

export default connect(null, { userSignupRequest, addFlashMessage })(RegisterPage);
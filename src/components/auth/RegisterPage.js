import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';
import { userSignupRequest } from '../../actions/signupActions'

class RegisterPage extends Component {

  render () {

    const style = { 
      backgroundColor: 'aliceblue', 
      padding: 25,
      border: '2px solid steelblue' 
    }

    const { userSignupRequest } = this.props;

    return (

      <Grid 
        onSubmit = { this.onSubmit }
      >
        
        <Row>
          <Col
          md = { 4 } mdoffset = { 4 } 
          style = { style }
          >
            <RegisterForm 

            userSignupRequest = { userSignupRequest } />
          </Col>
        </Row>
      </Grid>
    );
  }
}

RegisterPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

RegisterPage.defaultProps = {
  userSignupRequest: f => f
}

export default connect(null, { userSignupRequest })(RegisterPage);
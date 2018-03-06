import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './RegisterForm';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';

class RegisterPage extends Component {

  render() {

    return (
    <Grid 
      md = { 4 } mdoffset = { 4 } 
      onSubmit = { this.onSubmit }
    >
      <Row>
        <Col sm = { 12 } >
          <PageHeader> Registration </PageHeader>
        </Col>
      </Row>

      <RegisterForm/>
      
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

export default RegisterPage;
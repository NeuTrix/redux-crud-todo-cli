import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';

class RegisterForm extends Component {

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
      
    </Grid>
    );
  }
}

RegisterForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

RegisterForm.defaultProps = {
  userSignupRequest: f => f
}

export default RegisterForm;
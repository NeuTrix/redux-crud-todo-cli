import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';
import userSignupRequest from /''

class RegisterPage extends Component {

  render () {

    const { userSignupRequest } = this.props;

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

      <RegisterForm  
        userSignupRequest = { userSignupRequest }  
      />
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

mapStateToProps = (state) => { 
  return { } 
}

mapDispatchToProps = (dispatch) => {
  userSignupRequest: (userSignupRequest) => dispatch(userSignupRequest)
 }

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
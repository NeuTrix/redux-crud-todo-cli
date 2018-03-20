import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { Col, Grid, Row } from 'react-bootstrap';
import { userLoginRequest } from '../../actions/loginActions'
import { addFlashMessage } from '../../actions/flashActions'

class LoginPage extends Component {

  render () {

    const style = { 
      backgroundColor: '#ccffcc', 
      padding: 25,
      border: '2px solid darkgreen' 
    }

    // deconstruction
    const { userLoginRequest, addFlashMessage } = this.props;

    return (
    <Grid >
      <Row>
        <Col md = { 4 } mdOffset = { 4 }  style = { style } >
          <LoginForm 
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
  userLoginRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

LoginPage.defaultProps = {
  userLoginRequest: f => f,
  addFlashMessage: f => f
}

export default connect(null, { userLoginRequest, addFlashMessage })(LoginPage);
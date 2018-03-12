/*import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogOutForm from './LogOutForm';
import { Col, Grid, Row } from 'react-bootstrap';
import { userLogOutRequest } from '../../actions/loginActions'
import { addFlashMessage } from '../../actions/flashActions'

class LogOutPage extends Component {

  render () {

    const style = { 
      backgroundColor: 'aliceblue', 
      padding: 25,
      border: '2px solid navy' 
    }

    // deconstruction
    const { userLogOutRequest, addFlashMessage } = this.props;

    return (
    <Grid >
      <Row>
        <Col md = { 4 } mdoffset = { 4 }  style = { style } >
          <LogOutForm 
            userLogOutRequest = { userLogOutRequest } 
            addFlashMessage = { addFlashMessage } 
          />
        </Col>
      </Row>
    </Grid>
    );
  }
}

LogOutPage.propTypes = {
  userLogOutRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

LogOutPage.defaultProps = {
  userLogOutRequest: f => f,
  addFlashMessage: f => f
}

export default connect(null, { userLogOutRequest, addFlashMessage })(LogOutPage);*/
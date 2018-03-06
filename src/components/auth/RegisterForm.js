import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { 
  Button, Col, ControlLabel, Form, FormControl,
  FormGroup, Grid, PageHeader, Row 
} from 'react-bootstrap';

class RegisterForm extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      username: '',
      email: '',
      emailConfirm: '',
      passwordConfirm: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
    console.log(`${e.target.name}: ${e.target.value}`)
  }

  onSubmit(e) {
    e.preventDefault()   
    this.props.userSignupRequest(this.state)
  }

  render() {

    return (

      <Form>

        <FormGroup>
          <Row>
            <Col style = { { margin: 15 } }>
              <ControlLabel>
                Username 
              </ControlLabel>

              <FormControl
                name = 'username'
                type="text"
                label="Username"
                placeholder="Enter username"
                xxx={ this.state.xxx }
                onChange={ this.handleChange }
              />
              <FormControl.Feedback />
            </Col>

           <Col style = { { margin: 15 } }>
              <ControlLabel>
                Email 
              </ControlLabel>

              <FormControl
                name = 'email'
                type="email"
                label="Email address"
                placeholder="Enter email address"
                onChange={ this.handleChange }
              />
              <FormControl.Feedback />
            </Col>

            <Col style = { { margin: 15 } }>
              <FormControl
                type="email"
                name = 'emailConfirm'
                label="Email Confirm"
                placeholder="Confirm email address"
                onChange={ this.handleChange }
              />
              <FormControl.Feedback />
            </Col>
          </Row>

          <Row>
            <Col style = { { margin: 15 } }>
              <ControlLabel >
                Password
              </ControlLabel>

               <FormControl 
                type="password" 
                name = "password"
                label="Password" 
                placeholder="Enter your password"
                onChange={this.handleChange}
                />
              <FormControl.Feedback />
            </Col>

            <Col style = { { margin: 15 } }>
               <FormControl 
                type="password" 
                name = "passwordConfirm"
                label="Password Confirm" 
                placeholder="Confirm your password"
                onChange={this.handleChange}
                />
              <FormControl.Feedback />
            </Col>
          </Row>
        </FormGroup>

        <Button type="submit" bsStyle = 'primary' >
          Sign Up
        </Button>
        
      </Form>
    )
  };
};

RegisterForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

RegisterForm.defaultProps = {
  userSignupRequest: f => f
}

export default RegisterForm;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validateInput from '../../helpers/signupValidator'
import TextFieldGroup from './TextFieldGroup'

import { 
  Button, Col, ControlLabel, Form, FormControl,
  FormGroup, HelpBlock, PageHeader, Row 
} from 'react-bootstrap';

class RegisterForm extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      emailConfirm: '',
      errors: { },
      isLoading: false,
      password: '',
      passwordConfirm: '',
      username: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  isValid(){
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.state({ errors });
    }
    return isValid
  }

  onSubmit(e) {
    e.preventDefault() 
    if (this.isValid) {

    } 
    this.setState({ errors: { }, isLoading: true });
    this.props.userSignupRequest(this.state).then( 
      () => { }, // if all is ok, else...
      (err) => this.setState({ errors: err.response.data, isLoading: false })
    );
  }

  render() {
    const { errors } = this.state;
   const style = { margin: 15 }
  const styleErr = { color: 'red' }

    return (
      <Form  onSubmit = { this.onSubmit } >
        <FormGroup>
          <Row>
            <Col style = { style } >
              <PageHeader> Registration </PageHeader>
            </Col>
            <Col>
            </Col>
          </Row> 
          <Row>
            <Col style = { style } >
              <ControlLabel>
                Username 
              </ControlLabel>

              <FormControl
                name = 'username'
                type="text"
                label="Username"
                placeholder="Enter username"
                xxx={ this.state.xxx }
                onChange={ this.onChange }
              />
              <FormControl.Feedback />
              { errors.username && 
                <HelpBlock style = { styleErr } > {errors.username} </HelpBlock>
              }
            </Col>

          

            <Col style = { style } >
              <FormControl
                type="email"
                name = 'emailConfirm'
                label="Email Confirm"
                placeholder="Confirm email address"
                onChange={ this.onChange }
              />
               <FormControl.Feedback />
              { errors.emailConfirm && 
                <HelpBlock style = { styleErr } > {errors.emailConfirm} </HelpBlock>
              }
            </Col>
          </Row>

          <Row>
            <Col style = { style } >
              <ControlLabel >
                Password
              </ControlLabel>

               <FormControl 
                type="password" 
                name = "password"
                label="Password" 
                placeholder="Enter your password"
                onChange={this.onChange}
                />
               <FormControl.Feedback />
              { errors.password && 
                <HelpBlock style = { styleErr } > {errors.password} </HelpBlock>
              }
            </Col>

            <Col style = { style } >
               <FormControl 
                type="password" 
                name = "passwordConfirm"
                label="Password Confirm" 
                placeholder="Confirm your password"
                onChange={this.onChange}
                />
              <FormControl.Feedback />
              { errors.passwordConfirm && 
                <HelpBlock style = { styleErr } > {errors.passwordConfirm} </HelpBlock>
              }
            </Col>
          </Row>
        </FormGroup>

        <Button disable = { this.state.isLoading.toString() } type="submit" bsStyle = 'primary' >
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
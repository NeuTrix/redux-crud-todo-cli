import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validateInput from '../../helpers/signupValidator'
import TextFieldGroup from './TextFieldGroup'
import { Button, Col, Form, PageHeader, Row } from 'react-bootstrap';

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

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if(!isValid) {
      this.setState({ errors });
    }
    return isValid
  }

  onSubmit(e) {
    e.preventDefault() 

    if (this.isValid()) {
      this.setState({ errors: { }, isLoading: true }); // reset state
      this.props.userSignupRequest(this.state)
        .then((res) => { 
            this.props.addFlashMessage({
              type: 'success',
              text: `Welcome ${ res.data.username} ! You have successfully Registered and Logged In.`
            })
            this.context.router.history.push('/todos'); 
          }, 
         (err) => {
            this.props.addFlashMessage({
              type: 'error',
              text: `WARNING! Something went wrong.  Please try again:   ${ err }.`
            });
            this.setState({ 
              errors: err.response.data, 
              isLoading: false 
            })
        })
    }
  }

  render() {
    
    const { errors } = this.state;
    const style = { margin: 15 }

    return (
      <Row>
        <Col style = { style } >
          <PageHeader> Registration </PageHeader>
        </Col>
        <Col> 
          <Form  onSubmit = { this.onSubmit } >
            <TextFieldGroup 
              errors = { errors.username }
              label = 'Username' 
              name = 'username'
              onChange = { this.onChange }
              placeholder = 'Enter a username'
              type = 'text'
              value = { this.state.username }
            />
            <TextFieldGroup 
              errors = { errors.email }
              label = 'Email' 
              name = 'email'
              onChange = { this.onChange }
              placeholder = 'Enter your email address'
              type = 'email'
              value = { this.state.email }
            />
            <TextFieldGroup 
              errors = { errors.emailConfirm }
              name = 'emailConfirm'
              placeholder = 'Confirm your email address'
              onChange = { this.onChange }
              type = 'email'
              value = { this.state.emailConfirm }
            />
            <TextFieldGroup 
              errors = { errors.password }
              label = 'Password' 
              name = 'password'
              onChange = { this.onChange }
              placeholder = 'Enter your password'
              type = 'password'
              value = { this.state.password }
            />
            <TextFieldGroup 
              errors = { errors.passwordConfirm }
              name = 'passwordConfirm'
              placeholder = 'Confirm your password'
              onChange = { this.onChange }
              type = 'password'
              value = { this.state.passwordConfirm } 
            />
            <Button disable = { this.state.isLoading.toString() } type = 'submit' bsStyle = 'primary' >
              Sign Up
            </Button> 
          </Form>
        </Col> 
      </Row> 
    )
  };
};

RegisterForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

RegisterForm.defaultProps = {
  userSignupRequest: f => f,
  addFlashMessage: f => f
}

RegisterForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default RegisterForm;
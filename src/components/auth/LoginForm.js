import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validateInput from '../../helpers/signupValidator'
import TextFieldGroup from './TextFieldGroup'
import { Button, Col, Form, PageHeader, Row } from 'react-bootstrap';

class LoginForm extends Component {

  constructor (props, context) {
    super(props, context);
    this.state = {
      identifier: '',
      password: '',
      errors: { },
      isLoading: false,
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
      this.setState({ errors });
    }
    return isValid
  }

  onSubmit(e) {
    e.preventDefault() 

    if (this.isValid()) {
      this.setState({ errors: { }, isLoading: true }); // reset state
      this.props.userSignupRequest(this.state)
        .then( 
          () => { 
            this.props.addFlashMessage({
              type: 'success',
              text: 'You have successfully registered. Welcome!'
            })
            this.context.router.history.push('/'); 
          }, 
          (err) => this.setState({ 
            errors: err.response.data, 
            isLoading: false 
          })
        );
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
              errors = { errors.identifier }
              label = 'Username / Email' 
              name = 'identifier'
              onChange = { this.onChange }
              placeholder = 'enter a username -or- email'
              type = 'text'
              value = { this.state.identifier}
            />
           
            <TextFieldGroup 
              errors = { errors.password }
              label = 'Password' 
              name = 'password'
              onChange = { this.onChange }
              placeholder = 'enter your password'
              type = 'password'
              value = { this.state.password}
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

LoginForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

LoginForm.defaultProps = {
  userSignupRequest: f => f,
  addFlashMessage: f => f
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default LoginForm;
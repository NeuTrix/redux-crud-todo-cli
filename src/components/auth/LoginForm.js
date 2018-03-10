import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validateInput from '../../helpers/loginValidator'
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
        .then(() => { 
            this.props.addFlashMessage({
              type: 'success',
              text: ' Welcome! You have successfully Loggedin.'
            })
            this.context.router.history.push('/'); 
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
    
    const { errors, identifier, password, isLoading } = this.state;
    const style = { margin: 15 }

    return (
      <Row>
        <Col style = { style } >
          <PageHeader> Sign In </PageHeader>
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
              value = { identifier }
            />
           
            <TextFieldGroup 
              errors = { errors.password }
              label = 'Password' 
              name = 'password'
              onChange = { this.onChange }
              placeholder = 'enter your password'
              type = 'password'
              value = { password }
            />
            
            <Button disable = { isLoading.toString() } type = 'submit' bsStyle = 'success' >
              Sign In
            </Button> 

          </Form>
        </Col> 
      </Row> 
    )
  };
};

LoginForm.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

LoginForm.defaultProps = {
  userLoginRequest: f => f,
  addFlashMessage: f => f
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default LoginForm;
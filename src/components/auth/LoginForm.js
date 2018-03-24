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
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: { }, isLoading: true }); // reset state
      this.props.userLoginRequest(this.state)
        .then((res) => {
          console.log(res)
        this.props.addFlashMessage({
          type: 'success',
          text: `Welcome ${ res.data.username }! You have successfully Logged In.`
        })

        this.context.router.history.push('/todos');
      },
        (err) => { this.setState({errors: err.response.data.errors, isLoading: false})
      });
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

          { errors.form && 
            <div className= 'alert alert-danger' > 
              {errors.form}
            </div>
          }

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
  addFlashMessage: PropTypes.func.isRequired,
  currUser: PropTypes.object.isRequired,
  userLoginRequest: PropTypes.func.isRequired,
}

LoginForm.defaultProps = {
  addFlashMessage: f => f,
  currUser: { },
  userLoginRequest: f => f,
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default LoginForm;
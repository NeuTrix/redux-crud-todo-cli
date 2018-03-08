import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { 
  Button, Col, ControlLabel, Form, FormControl,
  FormGroup, HelpBlock, PageHeader, Row 
} from 'react-bootstrap';

class RegisterForm extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      username: '',
      email: '',
      emailConfirm: '',
      password: '',
      passwordConfirm: '',
      errors: { }
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()  
    this.setState({ errors: { } });
    // returns a promise
    this.props.userSignupRequest(this.state).then( 
      () => { }, // if all is ok, else...
      (err) => this.setState({ errors: err.response.data })
    );
  }

  render() {
    const { errors } = this.state;

    return (
      <Form  onSubmit = { this.onSubmit } >
        <FormGroup>
          <Row>
            <Col >
              <PageHeader> Registration </PageHeader>
            </Col>
            <Col>
            </Col>
          </Row>
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
                onChange={ this.onChange }
              />
              <FormControl.Feedback />
              { errors.username && 
                <HelpBlock> {errors.username} </HelpBlock>
              }
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
                onChange={ this.onChange }
              />
              <FormControl.Feedback />
               <FormControl.Feedback />
              { errors.email && 
                <HelpBlock> {errors.email} </HelpBlock>
              }
            </Col>

            <Col style = { { margin: 15 } }>
              <FormControl
                type="email"
                name = 'emailConfirm'
                label="Email Confirm"
                placeholder="Confirm email address"
                onChange={ this.onChange }
              />
              <FormControl.Feedback />
               <FormControl.Feedback />
              { errors.emailConfirm && 
                <HelpBlock> {errors.emailConfirm} </HelpBlock>
              }
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
                onChange={this.onChange}
                />
              <FormControl.Feedback />
               <FormControl.Feedback />
              { errors.password && 
                <HelpBlock> {errors.password} </HelpBlock>
              }
            </Col>

            <Col style = { { margin: 15 } }>
               <FormControl 
                type="password" 
                name = "passwordConfirm"
                label="Password Confirm" 
                placeholder="Confirm your password"
                onChange={this.onChange}
                />
              <FormControl.Feedback />
              { errors.passwordConfirm && 
                <HelpBlock> {errors.passwordConfirm} </HelpBlock>
              }
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
import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { 
  Button, 
  Col, 
  ControlLabel,
  Form, 
  Grid,
  FormControl,
  FormGroup, 
  HelpBlock,
  PageHeader,
  Row 
} from 'react-bootstrap';

class Registration extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      // email: '',
      // emailConfirm: '',
      // passwordConfirm: '',
      // pwordLength: ''
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
/*
  getValidationState() {
    const length = this.state.pwordLength.length;
    if (length > 7) return 'success';
    else if (length > 4) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }*/

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
    // validate email format
    // this.setState({ xxx: e.target.xxx });
    // ??? Test
    console.log(`${e.target.name}: ${e.target.value}`)
  }

  onSubmit(e) {
    e.preventDefault()   
    this.props.userSignupRequest(this.state)
  }

  render() {
    // let _Susername, _password

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

      <Row>
        <Grid>
          <Form>
            <FormGroup
            >

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

               {/* <Col style = { { margin: 15 } }>
                  <ControlLabel>
                    Email 
                  </ControlLabel>

                  <FormControl
                    inputRef = { value => this.state.email = value }
                    name = 'email'
                    type="email"
                    label="Email address"
                    placeholder="Enter email address"
                    xxx={ this.state.xxx }
                    onChange={ this.handleChange }
                  />
                  <FormControl.Feedback />
                </Col>

                <Col style = { { margin: 15 } }>
                  <FormControl
                    inputRef = { value => this.state.emailConfirm = value }
                    type="email"
                    name = 'emailConfirm'
                    label="Email Confirm"
                    placeholder="Confirm email address"
                    xxx={ this.state.xxx }
                    onChange={ this.handleChange }
                  />
                  <FormControl.Feedback />
                </Col>
            */}
              </Row>

              <Row>
                <Col style = { { margin: 15 } }>
                  <ControlLabel >
                    Password
                  </ControlLabel>

                    <HelpBlock style = { { color: 'lightgrey' } } >
                      Password must be at least 8 characters
                    </HelpBlock>

                   <FormControl 
                    type="password" 
                    name = "password"
                    label="Password" 
                    placeholder="Enter your password"
                    onChange={this.handleChange}
                    />
                
                  <FormControl.Feedback />

                </Col>
{/*
                <Col style = { { margin: 15 } }>

                   <FormControl 
                    inputRef = {value => this.state.passwordConfirm = value}
                    type="password" 
                    name = "passwordConfirm"
                    label="Password Confirm" 
                    placeholder="Confirm your password"
                    onChange={this.handleChange}
                    />
                
                  <FormControl.Feedback />

                </Col>*/}
              </Row>

            </FormGroup>

            <Button type="submit" bsStyle = 'primary' >
              Sign Up
            </Button>
            
          </Form>
        </Grid>
      </Row>
    </Grid>
    );
  }
}

Registration.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

Registration.defaultProps = {
  userSignupRequest: f => f
}

export default Registration;
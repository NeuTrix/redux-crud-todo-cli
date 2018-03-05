import React, { Component } from 'react';
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

import axios from 'axios'

class Registration extends Component {

  constructor(props, context) {
    super(props, context);
      // email: '',
      // emailConfirm: '',
      // passwordConfirm: '',
      // pwordLength: ''
    this.state = {
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
    // let api = 'localhost:3003/register'
    let api = 'https://redux-todo-api.herokuapp.com/register'
    let data = this.state
    e.preventDefault();
    console.log(this.state)
    // axios.put('https://redux-todo-api.herokuapp.com/register', {
    //   username: this.state.username, 
    //   password: this.state.password});
    axios.post(api, data)
    .then ((response) => {
        if (response.status !== 201 ) {
          throw Error (response.statusText);
        } 
      })
      .catch ((err) => {
        console.error (err);
      });

  }

  render() {
    let _username, _password

    return (
    <Grid 
      md = { 4 } mdOffset = { 4 } 
      onSubmit = { this.onSubmit }
    >
      <Row>
        <Col sm = { 12 } >
        {this.refs._username}
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
                    inputRef = { value => _username = value }
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
                    inputRef = {value => _password = value}
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

export default Registration;
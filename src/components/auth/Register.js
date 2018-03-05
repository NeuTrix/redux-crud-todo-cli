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


class Registration extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      pwordLength: ''
    };
  }

  getValidationState() {
    const length = this.state.pwordLength.length;
    if (length > 7) return 'success';
    else if (length > 4) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChangeEmail(e) {
    // validate email format
    // this.setState({ xxx: e.target.xxx });
  }
  handleChange(e) {
    //  validate password length
    // this.setState({ pwordLength: e.target.pwordLength });
  }

  render() {
    return (
    <Grid md = { 4 } mdOffset = { 4 } >

      <Row>
        <Col sm = { 12} >
          <PageHeader> Registration </PageHeader>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <Row>
                <Col style = { { margin: 15 } }>
                  <ControlLabel>
                    Username (email)
                  </ControlLabel>

                  <FormControl
                    id="formControlsEmail"
                    name = 'username'
                    type="email"
                    label="Email address"
                    placeholder="Enter email address"
                    xxx={this.state.xxx}
                    onChange={this.handleChangeEmail}
                  />
                  <FormControl.Feedback />
                </Col>
              </Row>

              <Row>
                <Col style = { { margin: 15 } }>
                  <ControlLabel >
                    Enter Password
                  </ControlLabel>

                   <FormControl 
                    id="formControlsPassword" 
                    name = "password"
                    type="password" 
                    label="Password" 
                    placeholder="Enter your password"
                    onChange={this.handleChange}
                    />
                
                  <FormControl.Feedback />

                  <HelpBlock style = { { color: 'lightgrey' } } >
                    Password must be at least 8 characters
                  </HelpBlock>
                </Col>
              </Row>

            </FormGroup>

            <Button type="submit">Sign Up</Button>
            
          </Form>
        </Col>
      </Row>
    </Grid>

    );
  }
}

export default Registration;
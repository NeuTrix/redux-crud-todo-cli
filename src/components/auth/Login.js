import React, { Component } from 'react';
import { 
	Button, 
	Col, 
	ControlLabel,
	Form, 
	FormControl,
	FormGroup, 
	Grid, 
	HelpBlock,
	Password,
	Row 
} from 'react-bootstrap';


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Login extends Component {

	render () { 

	// +++++++++ Styling  
	const spacing = { 
		xs: { form: 11, rank: 3, date: 5, addBtn: 2, resetBtn: 2 }, 
		sm: { form: 6, rank: 2, date: 2, addBtn: 1, resetBtn: 1 } 
	};

		const style = {
			outline: '1px solid orange',
			marginTop: 100,
			textAlign: 'center'
		};

		return (
			<Grid style = { style }>
				<Form className = 'Login' >

				<FieldGroup
			      id="formControlsEmail"
			      type="email"
			      label="Email address"
			      placeholder="Enter email"
			    />
					<FieldGroup
			      id="formControlsText"
			      type="text"
			      label="Username"
			      placeholder="Enter email address or UserId"
			    />
			    
				</Form>
			</Grid>
		);
	}
}

export default Login;
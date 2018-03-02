import React, { Component } from 'react';
import { 
	Button, 
	Col, 
	Form, 
	FormControl, 
	Grid, 
	Password,
	Row 
} from 'react-bootstrap';

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
					<Row>
							<h1> Account Login  </h1>
					</Row>
					<Row >
						<Col className ="username" xs = { 12 }  >
							<p>username</p>
						</Col>
					</Row>
					<Row>
						<Col className ="password" xs = { 12 }  >
							<Password>Passwordassword</Password>
						</Col>
					</Row>
				</Form>
			</Grid>
		);
	}
}

export default Login;
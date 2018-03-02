import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap'; 

class App extends Component {

	render () { 

		const spacing = {
			sm: {top: 1	, mid: 10, bot: 1}
		};

		const style = {
			outline: '1px solid orange',
			marginTop:250,
			textAlign: 'center'
		};

		return (
			<Row>
				<Col className ="Login" >
					<h1> Login Page Here </h1>
				</Col>
			</Row>
		);
	}
}

export default App;
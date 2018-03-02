import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap'; 

class App extends Component {

	render () { 

		const spacing = {
			// sm: {top: 1	, mid: 10, bot: 1}
		};

		const style = {
			outline: '1px solid orange',
			marginTop: 100,
			textAlign: 'center'
		};

		return (
			<Grid>
				<Row>
					<Col className ="Login" xs = { 12 } style = { style }  >
						<h1> Login Form Goes Here </h1>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default App;
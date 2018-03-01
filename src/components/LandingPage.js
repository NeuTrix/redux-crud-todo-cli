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
			<Grid className ="App">
				<Row>

					<Col style = { style } id = 'loadTopSection' sm = {spacing.sm.top}>
					</Col>
					 
					<Col style = { style } id = 'loadMiddleSection' sm = {spacing.sm.mid} >
						<h1> Welcome to the redux Todo app</h1>
					</Col>

					<Col style = { style } id = 'loadBottomSection' sm = {spacing.sm.bot}>
					
					</Col>

				</Row>

			</Grid>
		);
	}
}

export default App;
import React from 'react';
import { Button, Col, Jumbotron, Row } from 'react-bootstrap'
// import  PropTypes  from 'prop-types';

const style ={
	background: 'aliceblue',
	border: ' 2px solid navy',
	marginTop: 50,
	textAlign: 'center',
}

const styleBtn = {
	width: 100
}

const HomePage = (props) => {
  return (
  	<Jumbotron style = { style } >
  		<Row>
  			<Col>
				  <h2>MERN Todo application</h2>
  			</Col>
  			<Col>
				  <p> Fullstack CRUD application with: </p>
  			</Col>
  		</Row>

  		<Row>
	  		<Col xs = { 3 } ></Col>
  			<Col xs = { 6 } >
					<ul>
				  	<li style = { { textAlign: "left", fontSize: "1.5em"}} >
					  	Mongo | Mongoose
				  	</li>
				  	<li style = { { textAlign: "left", fontSize: "1.5em"}} >
					  	Express
				  	</li>
				  	<li style = { { textAlign: "left", fontSize: "1.5em"}} >
					  	React | Redux
				  	</li>
				  	<li style = { { textAlign: "left", fontSize: "1.5em"}} >
					  	Node
				  	</li>
					</ul>
  			</Col>
	  		<Col xs = { 3 } ></Col>
  		</Row>

  		<Row>
	  	
	  		<Col xs = { 3 } ></Col>

  			<Col xs = { 3 } xsPull = { 0 } >
  				<Button style = { styleBtn } > Register</Button>
  			</Col>
  			
  			<Col xs = { 3 } xsPull = { 1 } >
  				<Button style = { styleBtn } > Sign in </Button>
  			</Col>

	  		<Col xs = { 3 } ></Col>

  		</Row>

		</Jumbotron>
  );
}

export default HomePage;

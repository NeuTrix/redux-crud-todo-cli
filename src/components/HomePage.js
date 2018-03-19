import React from 'react';
import { Button, Col, Grid, Jumbotron, Row } from 'react-bootstrap'
// import  PropTypes  from 'prop-types';

const style ={
	background: 'aliceblue',
	border: ' 2px solid navy',
	// marginRight: 17,
	padding: 10,
	textAlign: 'center',
	borderRadius: 5,
}

const styleBtn = {
	width: 75
}

// +++++++++ Styling  
	const space = { 
		xs: { head: 12, list: 10, logn: 6, regs: 6 } 
	};

const HomePage = (props) => {
  return (
		<Grid>
	  	<Col style = { style } >
	  		<Row>
	  			<Col xs = { space.xs.head} >
					  <h2>MERN Todo </h2>
					  <p> Fullstack CRUD application: </p>
	  			</Col>
	  		</Row>

	  		<Row>
	  			<Col xs = { space.xs.list } xsPush = { 2 } >
						<ul>
					  	<li style = { { textAlign: "left", fontSize: "1em"}} >
						  	Mongo | Mongoose
					  	</li>
					  	<li style = { { textAlign: "left", fontSize: "1em"}} >
						  	Express
					  	</li>
					  	<li style = { { textAlign: "left", fontSize: "1em"}} >
						  	React | Redux
					  	</li>
					  	<li style = { { textAlign: "left", fontSize: "1em"}} >
						  	Node
					  	</li>
						</ul>
	  			</Col>
	  		</Row>

	  		<Row>
	  			
	  			<Col xs = { space.xs.logn } bsSize = 'xsmall' xsPush = { 1 }  >
	  				<Button style = { styleBtn } > Sign in </Button>
	  			</Col>
		  	
	  			<Col xs = { space.xs.regs } bsSize = 'xsmall' xsPull = { 1 } >
	  				<Button style = { styleBtn } > Register</Button>
	  			</Col>

	  		</Row>

			</Col>
		</Grid>
  );
}

export default HomePage;

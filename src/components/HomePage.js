import React from 'react';
import { Button, ButtonToolbar, Col, Grid, Jumbotron, Row } from 'react-bootstrap'
// import  PropTypes  from 'prop-types';

const style ={
	background: 'aliceblue',
	border: ' 2px solid navy',
	borderRadius: 5,
	color: 'navy',
	padding: 10,
	textAlign: 'center',
}

const styleBtn = {
	marginTop: 15,
	width: 75
}

// +++++++++ Styling  
	const space = { 
		xs: { head: 12, list: 10, logn: 6, regs: 6 }, 
		sm: { head: 12, list: 10, logn: 6, regs: 6 }, 
	};

const HomePage = (props) => {
  return (
		<Grid>
	  	<Col style = { style } >
	  		<Row>
	  			<Col 
	  				xs = { space.xs.head } 
  				>
					  <h2>MERN Todo </h2>
					  <p> Fullstack CRUD application featuring: </p>
	  			</Col>
	  		</Row>

	  		<Row>
	  			<Col 
	  				xs = { space.xs.list } 
	  				xsPush = { 2 } 
  				>
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
	  			<ButtonToolbar>
		  			<Col 
		  				xs = { space.xs.logn } 
		  				bsSize = 'xsmall' 
		  				xsPush = { 2 }  
	  				>
		  				<Button style = { styleBtn } bsStyle = 'success'> 
			  				Sign in 
	  					</Button>
		  			</Col>
			  	
		  			<Col 
		  				xs = { space.xs.regs } 
		  				bsSize = 'xsmall' 
	  				>
		  				<Button style = { styleBtn } bsStyle = 'primary'> 
			  				Register
	  					</Button>
		  			</Col>
	  			</ButtonToolbar>
	  		</Row>

			</Col>
		</Grid>
  );
}

export default HomePage;

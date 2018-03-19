import React from 'react';
import { Button, ButtonToolbar, Col, Grid, Jumbotron, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const style ={
	background: 'aliceblue',
	border: ' 2px solid navy',
	borderRadius: 5,
	color: 'navy',
	padding: 8,
	textAlign: 'center',
}

const styleBtn = {
	marginTop: 15,
	marginLeft: 1,
	marginRight: 1,
	color: 'whitesmoke',
	width: 70
}

// +++++++++ Styling  
	const space = { 
		xs: { head: 12, list: 10, btns: 12 }, 
		sm: { head: 12, list: 10, btns: 11 }, 
		md: { head: 12, list: 12, btns: 11 }, 
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
	  				xs = { space.xs.list } xsPush = { 2 } 
	  				sm = { space.sm.list } smPush = { 4 } 
	  				md = { space.md.list } mdPush = { 4 } 
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
		  				xs = { space.xs.btns } xsPush = { 3 }
		  				sm = { space.sm.btns } 
		  				md = { space.md.btns } 
 							
	  				>
	  					<Link to = '/login' >
			  				<Button  bsSize = 'small'style = { styleBtn } bsStyle = 'success'> 
				  				Sign in 
		  					</Button>
	  					</Link >
			  	

		  			
	  					<Link to = '/register' >
			  				<Button style = { styleBtn } bsSize = 'small'   bsStyle = 'primary'> 
			  				Register
		  					</Button>
	  					</Link >
		  			</Col>
	  			</ButtonToolbar>
	  		</Row>

			</Col>
		</Grid>
  );
}

export default HomePage;

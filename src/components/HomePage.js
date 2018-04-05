import React from 'react';
import { Button, ButtonToolbar, Col, Grid, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const style ={
	background: 'aliceblue',
	border: ' 2px solid navy',
	borderRadius: 5,
	color: 'navy',
	padding: 8,
	marginRight: 5,
	textAlign: 'center',
};

const styleBtn = {
	// marginTop: 15,
	marginLeft: 1,
	// marginRight: 1,
	color: 'whitesmoke',
	width: 70
};

const space = { 
	xs: { head: 12, list: 9, btns1: 3, btns2: 3 }, 
	sm: { head: 12, list: 4, btns1: 3, btns2: 3 }, 
	md: { head: 12, list: 4, btns1: 3, btns2: 3 }, 
	lg: { head: 12, list: 4, btns1: 3, btns2: 3 }, 
};

// +++++++++   +++++++++ 

const HomePage = (props) => {
	return (
		<Grid>
			<Row>
		  	<Col style = { style } >

		  		<Row>
		  			<Col xs = { space.xs.head } >
						  <h2>MERN Todo </h2>
						  <p> Fullstack CRUD application featuring: </p>
		  			</Col>
		  		</Row>

		  		<Row>
		  			<Col 
		  				xs = { space.xs.list } xsOffset = { 3 } 
		  				sm = { space.sm.list } smOffset = { 4 } 
		  				md = { space.md.list } mdOffset = { 4 } 
							lg = { space.lg.list } lgOffset = { 4 } 
	  				>
							<ul>
						  	<li style = { { textAlign: 'left', fontSize: '1em'}} >
							  	Mongo | Mongoose
						  	</li>
						  	<li style = { { textAlign: 'left', fontSize: '1em'}} >
							  	Express
						  	</li>
						  	<li style = { { textAlign: 'left', fontSize: '1em'}} >
							  	React | Redux
						  	</li>
						  	<li style = { { textAlign: 'left', fontSize: '1em'}} >
							  	Node
						  	</li>
							</ul>
		  			</Col>
		  		</Row>

		  		<Row>
		  			<Col 
		  				style =  {{ textAlign: 'right', outline: '1px solid orange'}}
							xs = { space.xs.btns1 } xsOffset = {3}
							
	  				>
	  					<Link to = '/login' >
			  				<Button  bsSize = 'small'style = { styleBtn } bsStyle = 'success'> 
				  				Sign in 
		  					</Button>
	  					</Link >
		  			</Col>
			  			
	  				<Col 
		  				style =  {{textAlign: 'left', outline: '1px solid orange'}}
							xs = { space.xs.btns2 }
						
	  				>
	  					<Link to = '/register' >
			  				<Button style = { styleBtn } bsSize = 'small'   bsStyle = 'primary'> 
			  				Register
		  					</Button>
	  					</Link >
		  			</Col>
		  		</Row>

				</Col>
			</Row>
		</Grid>
	);
};

export default HomePage;

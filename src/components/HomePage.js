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
	marginTop: 15,
	marginLeft: 1,
	marginRight: 1,
	color: 'whitesmoke',
	width: 70
};

const space = { 
	xs: { head: 12, list: 9, btns: 4 }, 
	sm: { head: 12, list: 4, btns: 4 }, 
	md: { head: 12, list: 4, btns: 4 }, 
	lg: { head: 12, list: 4, btns: 4 }, 
};

// +++++++++   +++++++++ 

const HomePage = (props) => {
	return (
		<Grid>
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
		  				xs = { space.xs.btns } xsOffset = { 4 }
		  				sm = { space.sm.btns } smOffset = { 4 }
		  				md = { space.md.btns } mdOffset = { 4 }
		  				lg = { space.lg.btns } lgOffset = { 4 }
	  				>
			  			<ButtonToolbar>
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
			  			</ButtonToolbar>
		  			</Col>
	  		</Row>
			</Col>
		</Grid>
	);
};

export default HomePage;

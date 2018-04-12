import React from 'react';
import { Button, ButtonToolbar, Col, Grid, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const style = {
	background: 'aliceblue',
	color: 'navy',
	marginRight: 5,
	opacity: 0.7,
	padding: 8,
	textAlign: 'center',
};

const styleBtn = {
	color: 'whitesmoke',
	width: 70
};

const styleList = { fontSize: '1em', textAlign: 'left' };

const space = { 
	xs: { head: 12, list: 8, btns1: 3, btns2: 3 }, 
	sm: { head: 12, list: 4, btns1: 3, btns2: 3 }, 
	md: { head: 12, list: 4, btns1: 3, btns2: 3 }, 
};

// +++++++++   +++++++++ 

const HomePage = (props) => {
	return (
		<Grid>
			<Row>
		  	<Col style = { style } >

		  		<Row>
		  			<Col xs = { space.xs.head } style = {{ textAlign: 'center'}}  >
						  <h2>MERN Todo </h2>
						  <p> Fullstack CRUD application featuring: </p>
		  			</Col>
		  		</Row>

		  		<Row>
		  			<Col 
		  				xs = { space.xs.list } xsOffset = { 2 } 
		  				sm = { space.sm.list } smOffset = { 5 } 
		  				md = { space.md.list } mdOffset = { 5 } 
	  				>
							<ul>
						  	<li style = { styleList } > Mongo | Mongoose </li>
						  	<li style = { styleList } > Express </li>
						  	<li style = { styleList } > React | Redux </li>
						  	<li style = { styleList } > Node </li>
							</ul>
		  			</Col>
		  		</Row>

		  		<Row>
		  			<Col 
	  					className =  'signinBtn'
		  				style = {{ textAlign: 'right' }}
			  			xs = { space.xs.btns1 } xsOffset = {3} 
			  			sm = { space.sm.btns1 } smOffset = {3} 
		  			>
	  					<Link to = '/login' >
			  				<Button  
				  				bsSize = 'small' 
				  				style = { styleBtn } 
				  				bsStyle = 'success'
			  				> 
				  				Sign in 
		  					</Button>
	  					</Link >
		  			</Col>
			  			
	  				<Col 
	  					className =  'registerBtn'
		  				style = {{ textAlign: 'left' }}
		  				xs = { space.xs.btns2 } 
		  				sm = { space.sm.btns2 } 
	  				>
	  					<Link to = '/register' >
			  				<Button 
				  				style = { styleBtn } 
				  				bsSize = 'small'   
				  				bsStyle = 'primary'
			  				> 
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

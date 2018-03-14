import React, { Component } from 'react';
import  PropTypes  from 'prop-types';
import { Jumbotron, Button } from 'react-bootstrap'

const style ={
	background: 'aliceblue',
	border: ' 2px solid navy',
	marginTop: 50,
}

const HomePage = (props) => {
  return (
  	<Jumbotron style = { style } >
		  <h1>MERN stack Todo Project</h1>
		  <p>
		    A simple CRUD app to explore Mongo, Express, React|Redux, and Node
		  </p>
		  <p> Login or Register to explore 
		  </p>
		</Jumbotron>
  );
}

export default HomePage;

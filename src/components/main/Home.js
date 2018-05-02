//  vendor
import React from 'react';
// custom
import LinkedButton from '../buttons/LinkedButton';
import Stamp from '../buttons/Stamp';
import styled from 'styled-components';
import DropNav from './DropNav';


// +++++++++  CSS  +++++++++ 

const Grid = styled.div`
	display: grid;
	grid-template-areas: 
	 	" title		title 	title 	title 	title	"
	  " subt		subt 		subt 		subt   	subt 	"
	  " ...			mongo 	expr 		react  	...	 	" 
	  " ...			redux 	node 		grid   	...	 	" 
	  " ... 		login 	...			regis  	...	  "
  ;
	grid-template-columns: auto;
	grid-auto-rows: auto;
	grid-gap: 25px 5px;
	padding: 10px;

	@media (min-width: 600px) {
		grid-template-areas: 
		 	" title 	title 	title 	title 	title 	title "
		  " subt 		subt 		subt 		subt 		subt 		subt 	"
		  " mongo 	expr 		react 	node 		redux 		grid 	" 
		  " ... 		...			login 	regis 	...			... 	" 
		 	" drop 	drop 	drop 	drop 	drop 	drop "
		  
	  ;
		grid-template-columns: auto;
		grid-auto-rows: auto;
		grid-gap: 25px 5px;
`;

const Login = styled(LinkedButton)`
	grid-area: login;
`;
const Register = styled(LinkedButton)`
	grid-area: regis;
`;

const Title = styled.div`
	grid-area: title;
	color-darkgrey;
`;

const Subtitle = styled.div`
	grid-area: subt;
	color: darkgrey;
`;

const Nav = styled(DropNav) `
	grid-area: drop;
`;
// +++++++++ COMPONENT  +++++++++ 

const Home = (props) => {
	
	return (
		<Grid className = 'Home engrBox paper'  >

			<Title className= '_title ctr engr under'> 
				<h3>React-Todo (beta)</h3> 
			</Title>  

			<Subtitle className = '-subtitle ctr' > 
				<h5>... a little Fullstack MERN CRUD web app featuring:</h5> 
			</Subtitle>  

			<Stamp area= 'mongo' color= 'steelblue' name= 'Mongo'/>
			<Stamp area= 'expr' color= 'steelblue' name= 'Express'/>
			<Stamp area= 'react' color= 'steelblue' name= 'React'/>
			<Stamp area= 'node' color= 'steelblue' name= 'NodeJS'/>
			<Stamp area= 'redux' color= 'orange' name= 'Redux'/>
			<Stamp area= 'grid' color= 'orange' name= 'Grid'/>

			<Login 
				className= '_login'
				name = 'Log In' 
				bgColor = 'palegreen'
				color = 'darkgreen'
				path = '/login' 
			/>

			<Register 
				className= '_register'
				name = 'Register' 
				bgColor = 'aliceblue'
				color = 'steelblue'
				path = '/register'
			/>
			<DropNav/>

		</Grid>
	);
};

export default Home;

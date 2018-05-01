//  vendor
import React from 'react';
// custom
import LinkedButton from '../buttons/LinkedButton';
import Stamp from '../buttons/Stamp';
import styled from 'styled-components';

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
	  ;
		grid-template-columns: auto;
		grid-auto-rows: auto;
		grid-gap: 25px 5px;
`;

const Login_ = styled(LinkedButton)`
	grid-area: login;
`;
const Register_ = styled(LinkedButton)`
	grid-area: regis;
`;

const Title_ = styled.div`
	grid-area: title;
	color-darkgrey;
`;

const Subtitle_ = styled.div`
	grid-area: subt;
	color: darkgrey;
`;

// +++++++++ COMPONENT  +++++++++ 

const Home = (props) => {
	
	return (
		<Grid className = 'Home engrBox paper'  >

			<Title_ className= '_title ctr engr under'> 
				<h3>React-Todo (beta)</h3> 
			</Title_>  

			<Subtitle_ className = '-subtitle ctr' > 
				<h5>... a little Fullstack MERN CRUD web app featuring:</h5> 
			</Subtitle_>  

			<Stamp area= 'mongo' color= 'steelblue' name= 'Mongo'/>
			<Stamp area= 'expr' color= 'steelblue' name= 'Express'/>
			<Stamp area= 'react' color= 'steelblue' name= 'React'/>
			<Stamp area= 'node' color= 'steelblue' name= 'NodeJS'/>
			<Stamp area= 'redux' color= 'orange' name= 'Redux'/>
			<Stamp area= 'grid' color= 'orange' name= 'Grid'/>

			<Login_ 
				className= '_login'
				name = 'Log In' 
				bgColor = 'palegreen'
				color = 'darkgreen'
				path = '/login' 
			/>

			<Register_ 
				className= '_register'
				name = 'Register' 
				bgColor = 'aliceblue'
				color = 'steelblue'
				path = '/register'
			/>

		</Grid>
	);
};

export default Home;

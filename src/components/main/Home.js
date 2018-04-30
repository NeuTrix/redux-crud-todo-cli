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
	 "title title title title"
	  "subtitle subtitle subtitle subtitle"
	  "mongo express react node" 
	  "redux grid decoup auth" 
	  " ... login register ..." ;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: auto;
	grid-gap: 25px 5px;
	padding: 10px;
`;

const GridLogin = styled(LinkedButton)`
	grid-area: login;
`;
const GridRegister = styled(LinkedButton)`
	grid-area: register;
`;
const GridStamp = styled(Stamp)`

`;

// +++++++++ COMPONENT  +++++++++ 

const Home = ({className, children}) => {
	
	return (
		<Grid className = 'Home engrBox paper'  >

			<div className= 'ctr engr under' style= {{ gridArea: 'title'}}> 
				<h3>React-Todo (beta)</h3> 
			</div>  

			<div className = 'ctr' style = {{ gridArea: 'subtitle' }} > 
				<h5>... a little Fullstack MERN CRUD web app featuring:</h5> 
			</div>  

			<Stamp area= 'mongo' color= 'steelblue' name= 'Mongo'/>
			<Stamp area= 'express' color= 'steelblue' name= 'Express'/>
			<Stamp area= 'react' color= 'steelblue' name= 'React'/>
			<Stamp area= 'node' color= 'steelblue' name= 'NodeJS'/>
			<Stamp area= 'redux' color= 'darkgreen' name= 'Redux'/>
			<Stamp area= 'grid' color= 'darkgreen' name= 'Grid'/>
			<Stamp area= 'decoup' color= 'orange' name= 'Decoupled'/>
			<Stamp area= 'auth' color= 'orange' name= 'Auth'/>

			<GridLogin 
				name = 'Log In!!' 
				bgColor = 'palegreen'
				color = 'darkgreen'
				path = '/login' 
			/>

			<GridRegister 
				name = 'Register' 
				bgColor = 'aliceblue'
				color = 'steelblue'
				path = '/register'
			/>

		</Grid>
	);
};

export default Home;

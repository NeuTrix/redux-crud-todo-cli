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
	  "stamp stamp stamp stamp" 
	  "stamp stamp stamp stamp" 
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

			<Stamp area = '3/1' color= 'steelblue' name= 'Mongo'/>
			<Stamp area = '3/2' color= 'steelblue' name= 'Express'/>
			<Stamp area = '3/3' color= 'steelblue' name= 'React'/>
			<Stamp area = '3/4' color= 'steelblue' name= 'NodeJS'/>
			<Stamp area = '4/1' color= 'darkgreen' name= 'Redux'/>
			<Stamp area = '4/2' color= 'darkgreen' name= 'CSS Grid'/>
			<Stamp area = '4/3' color= 'orange' name= 'Decoupled'/>
			<Stamp area = '4/4' color= 'orange' name= 'Secure Login'/>

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

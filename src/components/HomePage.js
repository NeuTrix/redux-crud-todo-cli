import React from 'react';
import LoginButton from './auth/LoginButton';
import RegisterButton from './auth/RegisterButton';
import Stamp from './Stamp';

// +++++++++  CSS  +++++++++ 
const style = {
	display: 'grid',
	gridTemplateAreas: 
	` "title title title title"
	  "subtitle subtitle subtitle subtitle"
	  "stamp stamp stamp stamp" 
	  "stamp stamp stamp stamp" 
	  " ... login register ..."   `,
	gridTemplateColumns: 'repeat(4, 1fr)',
	gridGap: '25px 5px',
	background: 'white',
	padding: 10,
};

// +++++++++ COMPONENT  +++++++++ 
const HomePage = (props) => {
	return (
		<div className = 'box ' style = { style } >
			<div className= 'box ctr mat' style= {{ gridArea: 'title' }}> 
				<h3>React-Todo (beta)</h3> 
			</div>  
			<div className = 'ctr' style = {{ gridArea: 'subtitle' }} > 
				<h5>... a little Fullstack MERN CRUD web app featuring:</h5> 
			</div>  
			<Stamp area= '3/1' color= 'steelblue' name= 'Mongo'/>
			<Stamp area= '3/2' color= 'steelblue' name= 'Express'/>
			<Stamp area= '3/3' color= 'steelblue' name= 'React'/>
			<Stamp area= '3/4' color= 'steelblue' name= 'NodeJS'/>
			<Stamp area= '4/1' color= 'green' name= 'Redux'/>
			<Stamp area= '4/2' color= 'green' name= 'CSS Grid'/>
			<Stamp area= '4/3' color= 'orange' name= 'Decoupled'/>
			<Stamp area= '4/4' color= 'orange' name= 'Secure Login'/>
			<LoginButton area = 'login' />
			<RegisterButton area = 'register' />
		</div>
	);
};

export default HomePage;

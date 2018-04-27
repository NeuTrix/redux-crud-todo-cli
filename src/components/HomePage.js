import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import Stamp from './Stamp';

// +++++++++ CSS +++++++++ 

const style = {

	// grid layout
	grid : {
		display: 'grid',
		gridTemplateAreas: 
		` "title title title title"
		  "subt subt subt subt"
		  "stamp stamp stamp stamp" 
		  "stamp stamp stamp stamp" 
		  " .. login register .."   `,
		gridTemplateColumns: 'repeat(4, 1fr)',
		gridGap: '25px 5px',

		background: 'white',
		padding: 15,
	},

	//callouts
	title: { 
		gridArea: 'title' 
	},

	subt: { 
		gridArea: 'subt', 
		border: 'none', 
		background: 'white' 
	},

	

	feats: { 
		color: 'steelblue', 
		borderColor: 'steelblue' 
	},

};

const apps=  { 
		color: 'orange', 
		borderColor: 'orange', 
	}

// +++++++++ COMPONENT +++++++++ 

const HomePage = (props) => {
	
	return (
		<div className = 'box ' style = { style.grid } >
			
			<div 
				className = 'box material' 
				style = {{ gridArea: 'title'}, style.title} > 
				<h3>React-Todo (beta)</h3> 
			</div>  

			<div 
				className = 'box' 
				style = { style.subt } > 
				<h5>... a little Fullstack MERN CRUD web app featuring:</h5> 
			</div>  

			<Stamp area= 'stamp' color= 'steelblue' name= 'Decoupled'/>
			<Stamp area= 'stamp' color= 'steelblue' name= 'Mongo'/>
			<Stamp area= 'stamp' color= 'steelblue' name= 'Express'/>
			<Stamp area= 'stamp' color= 'steelblue' name= 'React'/>
			<Stamp area= 'stamp' color= 'steelblue' name= 'NodeJS'/>
			<Stamp area= 'stamp' color= 'steelblue' name= 'CSS Grid'/>
			<Stamp area= 'stamp' color= 'steelblue' name= 'Redux'/>
			<Stamp area= 'stamp' color= 'steelblue' name= 'Secure Login'/>
			
			<LoginButton area = 'login' />
			<RegisterButton area = 'register' />

		</div>
	);
};

export default HomePage;

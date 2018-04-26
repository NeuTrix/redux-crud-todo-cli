import React from 'react';
import { Link } from 'react-router-dom';

const style = {
grid : {
	// grid layout
	display: 'grid',
	gridTemplateAreas: 
	` "title title title title"
	  "subt subt subt subt"
	  "apps apps apps apps"
	  ".. login regis .."   `,

  //  base styling
	background: 'aliceblue',
	color: 'navy',
	marginRight: 5,
	opacity: 0.7,
	padding: 8,
	textAlign: 'center'
	},

	title: { 
		gridArea: 'title',
	},

	subt: { 
		gridArea: 'subt',
	},

	apps: { 
		gridArea: 'apps',
	},

	login: { 
		gridArea: 'login',
	},

	regis: { 
		gridArea: 'regis',
	},


};


// +++++++++ COMPONENT  +++++++++ 

const HomePage = (props) => {
	return (
		<div style = { style.grid } >
			
			<div style = {{ gridArea: 'title'}} > 
				<h1>Li'l Todo app (beta)</h1> 
			</div>  

			<div style = { style.subt } > 
				<h2>MERN stack application</h2> 
			</div>  

			<div style = { style.apps } >  
				<h3>Mongo | Mongoose</h3>
			</div> 

			<div style = { style.apps } >  
				<h3>Express</h3>
				
			</div> 

			<div style = { style.apps } >  
				<h3>React | Redux</h3>
				
			</div> 

			<div style = { style.apps } >  
				<h3>NodeJS </h3>
				
			</div>  

			<div style = { style.login } >  
				<button>
				</button>
			</div>  

			<div style = { style.signin } >  
				<button>
				</button>
			</div>  

		</div>
	);
};

export default HomePage;

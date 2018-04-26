import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

// +++++++++ CSS +++++++++ 

const style = {

	// grid layout
	grid : {
		display: 'grid',
		gridTemplateAreas: 
		` "title title title title"
		  "subt subt subt subt"
		  "apps apps apps apps" 
		  "apps apps apps apps" 
		  " .. login regis .."   `,
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

	apps: { 
		color: 'orange', 
		borderColor: 'orange', 
		opacity: 1, 
	},

	feats: { 
		color: 'steelblue', 
		borderColor: 'steelblue' 
	},

	// buttons


	regis: { 
		backgroundColor: 'lightblue',
		borderColor: 'steelblue',
		color: 'steelblue',
	},
};

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

			<div 
				className = 'callout box material' 
				style = {{ gridColumn: '1 / 2' }, style.apps } 
			>  
				<h4>Mongo</h4>
			</div> 

			<div 
				className = 'callout box material' 
				style = {{ gridColumn: '2 / 3' }, style.apps } 
			>  
				<h4>Express</h4>
			</div> 

			<div 
				className = 'callout box material' 
				style = {{ gridColumn: '4 / 5' }, style.apps } 
			>  
				<h4>React</h4>
			</div> 

			<div 
				className = 'callout box material' 
				style = {{ gridColumn: '3 / 4' }, style.apps } 
			>  
				<h4>NodeJS</h4>
			</div> 

			<div 
				className = 'callout box material' 
				style = {{ gridColumn: '1 / 2' }, style.feats } 
			>  
				<h5>Decoupled</h5>
			</div> 

			<div 
				className = 'callout box material' 
				style = {{ gridColumn: '2 / 3' }, style.feats } 
			>  
				<h5>CSS Grid</h5>
			</div> 

			<div 
				className = 'callout box material' 
				style = {{ gridColumn: '4 / 5' }, style.feats } 
			>  
				<h5>Redux</h5>
			</div> 

			<div 
				className = 'callout box material' 
				style = {{ gridColumn: '3 / 4' }, style.feats } 
			>  
				<h5>Login/Auth</h5>
			</div> 

			<LoginButton area = 'login' />

			<Link to = '/register' style = {{ gridArea: 'regis'} } >
				<button className= 'button material' style= { style.regis } >
					Register
				</button>  
			</Link>

		</div>
	);
};

export default HomePage;

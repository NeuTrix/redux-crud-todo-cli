import React from 'react';
import { Link } from 'react-router-dom';
import * as mod from '../helpers/cssConstants';

const style = {
grid : {
	// grid layout
	display: 'grid',
	gridTemplateAreas: 
	` "title title title title"
	  "subt subt subt subt"
	  "apps apps apps apps" 
	  ".. login regis .."   `,
	// gridAutoFlow: 'row',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gridGap: '25px 5px',

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
		color: 'orange',
		border: '3px solid orange',
		backgroundColor: '#ffdd77',
		borderRadius: 5,
		minHeight: 50,
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
				<h3>Li'l Todo app (beta)</h3> 
			</div>  

			<div style = { style.subt } > 
				<h4>... a little MERN stack | CRUD web app :</h4> 
			</div>  

			<div style = {{ gridColumn: '1 / 2' }, style.apps } >  
				<p>Mongoose</p>
			</div> 

			<div style = {{ gridColumn: '2 / 3' }, style.apps } >  
				<p>Express </p>
			</div> 

			<div style = {{ gridColumn: '4 / 5' }, style.apps } >  
				<p>React</p>
			</div> 

			<div style = {{ gridColumn: '3 / 4' }, style.apps } >  
				<p>NodeJS </p>
			</div> 

			<div style = { style.login } >  
				<button> Login
				</button>
			</div>  

			<div style = { style.regis } >  
				<button> Register
				</button>
			</div>  

		</div>
	);
};

export default HomePage;

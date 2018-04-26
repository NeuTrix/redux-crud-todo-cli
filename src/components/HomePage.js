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
	  "feats feats feats feats" 
	  ".. login regis .."   `,
	// gridAutoFlow: 'row',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gridGap: '10px 5px',

  //  base styling
	background: 'white',
	borderRadius: 5,
	border: '2px solid navy',
	marginRight: 5,
	opacity: 0.9,
	padding: 8,
	textAlign: 'center'
	},

	title: { 
		gridArea: 'title',
		backgroundColor: 'whitesmoke',
		border: '2px solid grey',
		borderRadius: 5,
	},

	subt: { 
		gridArea: 'subt',
		marginBottom: 20,
	},

	apps: { 
		display: 'flex',
		color: 'chocolate',
		border: '3px solid chocolate',
		// backgroundColor: '#ffdd77',
		backgroundColor: 'whitesmoke',
		borderRadius: 5,
		minHeight: 80,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 50,
	},

	login: { 
		gridArea: 'login',
		backgroundColor: '#ccffcc',
		border: '2px solid green',
		color: 'green',
		width: 75,
		borderRadius: 5,
	},

	regis: { 
		gridArea: 'regis',
		backgroundColor: 'lightblue',
		border: '2px solid navy',
		opacity: '100%',
		color: 'navy',
		width: 75,
		borderRadius: 5,
	},


};


// +++++++++ COMPONENT  +++++++++ 

const HomePage = (props) => {
	return (
		<div style = { style.grid } >
			
			<div style = {{ gridArea: 'title'}, style.title} > 
				<h3>Li'l Todo app (beta)</h3> 
			</div>  

			<div style = { style.subt } > 
				<h5>... a little MERN CRUD web application featuring:</h5> 
			</div>  

			<div style = {{ gridColumn: '1 / 2' }, style.apps } >  
				<h4>Mongo</h4>
			</div> 

			<div style = {{ gridColumn: '2 / 3' }, style.apps } >  
				<h4>Express</h4>
			</div> 

			<div style = {{ gridColumn: '4 / 5' }, style.apps } >  
				<h4>React</h4>
			</div> 

			<div style = {{ gridColumn: '3 / 4' }, style.apps } >  
				<h4>NodeJS</h4>
			</div> 

			<button style = { style.login } >  
					Login
			</button>  

			<button style = { style.regis } >  
				Register
			</button>  

		</div>
	);
};

export default HomePage;

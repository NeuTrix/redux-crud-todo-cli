import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HttpSelector from './HttpSelector'
import { Col, Form, FormGroup, Grid, PageHeader, Radio, Row } from 'react-bootstrap'

class AdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	option: 'OFF',
    	CreateActions: '',
    	ReadActions: '',
    	UpdateActions: '',
    	DeleteActions: '',
    };

    this.onClick = this.onClick.bind(this);
  }

	onClick(e){
		e.preventDefault()
		this.setState({ option: [e.target.value] })
		console.log(e.target.value)
	}

  render() {

  	const { 
			option,
  		CreateActions,
			ReadActions,
			UpdateActions,
			DeleteActions, 
		} = this.state;

		// +++++++++ Styling  
		const space = { 
			sm: { all: 3, crt: 3, rea: 3, upd: 4, del: 2, log: 2, sig: 2 }
		};

    return (
    	<Grid>
        <Row>
        	<Col  >
		        <PageHeader> Walker! AdminPage </PageHeader>
	        </Col>
        </Row>

        <Row>
	        <Col sm = { space.sm.all } >
		        <HttpSelector 
		        	checked = ''
			        labels = { ['localHost:3003', 'Herok.app', 'OFF' ] }
			        name = 'AllActions'
							onClick = ''
			        values = { ['OFF','http://localhost:3003','https://redux-todo-api.herokuapp.com/' ] }
		        />
	        </Col>

         <Col sm = { space.sm.str } >
		        <HttpSelector 
		        	checked = ''
			        labels = { ['localHost:3003', 'Herok.app', 'OFF' ] }
			        name = 'AllActions'
							onClick = ''
			        values = { ['OFF','http://localhost:3003','https://redux-todo-api.herokuapp.com/' ] }
		        />
	        </Col>

         <Col sm = { space.sm.crt } >
		        <HttpSelector 
		        	checked = ''
			        labels = { ['localHost:3003', 'Herok.app', 'OFF' ] }
			        name = 'AllActions'
							onClick = ''
			        values = { ['OFF','http://localhost:3003','https://redux-todo-api.herokuapp.com/' ] }
		        />
	        </Col>

         <Col sm = { space.sm.rea } >
		        <HttpSelector 
		        	checked = ''
			        labels = { ['localHost:3003', 'Herok.app', 'OFF' ] }
			        name = 'AllActions'
							onClick = ''
			        values = { ['OFF','http://localhost:3003','https://redux-todo-api.herokuapp.com/' ] }
		        />
	        </Col> 

	        <Col sm = { space.sm.upd } >
		        <HttpSelector 
		        	checked = ''
			        labels = { ['localHost:3003', 'Herok.app', 'OFF' ] }
			        name = 'AllActions'
							onClick = ''
			        values = { ['OFF','http://localhost:3003','https://redux-todo-api.herokuapp.com/' ] }
		        />
	        </Col>

         <Col sm = { space.sm.del } >
		        <HttpSelector 
		        	checked = ''
			        labels = { ['localHost:3003', 'Herok.app', 'OFF' ] }
			        name = 'AllActions'
							onClick = ''
			        values = { ['OFF','http://localhost:3003','https://redux-todo-api.herokuapp.com/' ] }
		        />
	        </Col>

        </Row>
    	</Grid>
    );
  }
}

export default AdminPage;

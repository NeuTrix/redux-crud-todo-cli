import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HttpSelector from './HttpSelector'
import { Col, Form, FormGroup, Grid, PageHeader, Radio, Row } from 'react-bootstrap'

class AdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
			AllActions: '', 
			AuthActions: '', 
    	CreateActions: '',
    	ReadActions: '',
    	UpdateActions: '',
    	DeleteActions: '',
    	AuthActions: '',
    	checked: 'Heroku',
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
			AllActions, 
			AuthActions, 
  		CreateActions,
			ReadActions,
			UpdateActions,
			DeleteActions,
			checked,
		} = this.state;

		// +++++++++ Styling  
		const space = { 
			xs: { all: 8, auth: 8, crt: 8, rea: 8, upd: 8, del: 8, ttl: 2 }
			// xs: { all: 4, auth: 4, crt: 4, rea: 4, upd: 4, del: 4 }
		}

    return (
    	<div fluid = 'true'>

        <Row>
        	<Col xs = { space.xs.ttl } >
		        <PageHeader> AdminPage </PageHeader>
	        </Col>
        </Row>

        <Row>
	        <Col xs = { space.xs.all } >
		        <HttpSelector 
		        	checked = { checked }
			        labels = { ['localHost:3003', 'Herok.app', 'OFF' ] }
			        name = 'AllActions'
							onClick = ''
			        values = { ['OFF','http://localhost:3003','https://redux-todo-api.herokuapp.com/' ] }
		        />
	        </Col>

         	<Col xs = { space.xs.auth } >
		        <HttpSelector 
		        	checked = { checked }
			        labels = { ['localHost:3003', 'Herok.app', 'OFF' ] }
			        name = 'AuthActions'
							onClick = ''
			        values = { ['OFF','http://localhost:3003','https://redux-todo-api.herokuapp.com/' ] }
		        />
	        </Col>

         	<Col xs = { space.xs.crt } >
		        <HttpSelector 
		        	checked = { checked }
			        labels = { ['localHost:3003', 'Herok.app', 'OFF' ] }
			        name = 'CreateActions'
							onClick = ''
			        values = { ['OFF','http://localhost:3003','https://redux-todo-api.herokuapp.com/' ] }
		        />
	        </Col>


         	<Col xs = { space.xs.rea } >
		        <HttpSelector 
		        	checked = { checked }
			        labels = { ['localHost:3003', 'Herok.app', 'OFF' ] }
			        name = 'ReadActions'
							onClick = ''
			        values = { ['OFF','http://localhost:3003','https://redux-todo-api.herokuapp.com/' ] }
		        />
	        </Col> 

	        <Col xs = { space.xs.upd } >
		        <HttpSelector 
		        	checked = { checked }
			        labels = { ['localHost:3003', 'Herok.app', 'OFF' ] }
			        name = 'UpdateActions'
							onClick = ''
			        values = { ['OFF','http://localhost:3003','https://redux-todo-api.herokuapp.com/' ] }
		        />
	        </Col>

         <Col xs = { space.xs.del } >
		        <HttpSelector 
		        	checked = { checked }
			        labels = { ['localHost:3003', 'Herok.app', 'OFF' ] }
			        name = 'DeleteActions'
							onClick = ''
			        values = { ['OFF','http://localhost:3003','https://redux-todo-api.herokuapp.com/' ] }
		        />
	        </Col>
        </Row>

    	</div>
    );
  }
}

export default AdminPage;

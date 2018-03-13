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

    return (
    	<Grid>
        <Row>
        	<Col md = { 4 } mdOffset = { 4 } >
		        <PageHeader> Walker! AdminPage </PageHeader>
	        </Col>
        </Row>
        <HttpSelector 
        checked = { option }
        title = 'CreateActions'
        labels = {['localHost:3003', 'Herok.app', 'OFF']}
        values = {[
        	'http://localhost:3003',
        	'https://redux-todo-api.herokuapp.com/' ,
        	'OFF'
        ]}
        />
    		

    	</Grid>

    );
  }
}

export default AdminPage;

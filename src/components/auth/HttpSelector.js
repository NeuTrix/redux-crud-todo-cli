import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, ControlLabel, Form, FormGroup, Radio, Row } from 'react-bootstrap';

const HttpSelector = ({ 
	checked = '', // reflects which item is checked
	labels = 'default', // array of radio button labels (3)
	name = 'default', // form group  
	onClick = f => f,// action function
	values = [ 1, 2, 3 ], // radio button value
	// +++++++++   +++++++++ 
	bgcolor = 'aliceblue' , // bg color style
	color = 'navy', // bg color style
}) => {

	const style = {
	  border: `2px solid ${ color }`,
	  backgroundColor: bgcolor,
		color: color,
		padding: 25,
		margin: 10
	 };

	const styleCallOut = {
	  border: '2px solid green',
	  backgroundColor: '#ccffcc',
	  color: 'darkgreen',
		fontSize: '0.75em',
	  padding: 3, 
	};

	const styleInner = {
	  // border: `2px solid green`,
	  // backgroundColor: '#ccffcc',
		// fontSize: '0.75em',
	  // color: 'darkgreen',
	  paddingLeft: 20, 
	};

	return (
  	<Col style = { style } >

  		<Row>
	  		<h4>
					<ControlLabel >{ name } </ControlLabel>
	  		</h4>
  		</Row>

  		<Row>
      	<Col lg = {12} >
			    <span style = { styleCallOut }> 
				    { `API: ${checked}` } 
			    </span>
		    </Col>
  		</Row>

  		<Row>
  			<Col style = { styleInner }>
	    		<Form horizontal > 

						<FormGroup  >

							<Radio 
				      name = { name } 
				      value = { values[ 0 ] }
				      onClick = { onClick} 
			      > { labels[ 0 ] }
			      </Radio>

			      <Radio 
			      	name = { name } 
			      	value = { values[ 1 ] }
			      	onClick = { onClick} 
		      	> { labels[ 1 ] }
			      </Radio>{' '}

			      <Radio 
			      	name = { name } 
			      	value = { values[ 2 ] }
			      	onClick = { onClick} 
		      	> { labels[ 2 ] } 
			      </Radio>{' '}

			     </FormGroup>

			    </Form>
      	</Col>
			</Row>
  	</Col>
	);
};

HttpSelector.propTypes = {
	checked: PropTypes.string.isRequired,
	labels: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	values: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired,
	// +++++++++   +++++++++ 
	bgcolor: PropTypes.string,
	color: PropTypes.string,
};

export default HttpSelector;

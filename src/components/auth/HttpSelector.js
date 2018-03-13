import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Form, FormGroup, Grid, PageHeader, Radio, Row } from 'react-bootstrap'

const HttpSelector = ({ 
	checked = '', // the currently checked button
	bgcolor = 'aliceblue' , // bg color style
	color = 'navy', // bg color style
	labels = 'default', // array of radio button labels (3)
	name = 'default', // action creator or block family 
	title = 'default', // collection title
	values = [ 1, 2, 3 ], // radio button value
	onClick = f => f// action function
}) => {
	const style = {
    border: `2px solid ${ color }`,
    backgroundColor: bgcolor,
		color: color,
   }
	const styleCallOut = {
    border: `2px solid green`,
    backgroundColor: '#ccffcc',
    color: 'darkgreen',
    padding: 5
	}
    return (
    	<Grid>
    		<Row  >
        	<Col style = { style } md = { 4 } mdOffset = { 4 } >

		    		<Form > 
								<h2 inline>CreateActions </h2>
		    		<p >
					    Current API server is... 
					    <span style = { styleCallOut }> { checked } </span>
		    		</p>

						<FormGroup >
							 <Radio 
					      	name = { name } 
					      	value = { values[ 0 ] }
					      	onClick = { onClick} 
					      	inline
					      	>
					        { labels[ 0 ] }
					      </Radio>

					      <Radio 
					      	name = { name } 
					      	value = { values[ 1 ] }
					      	onClick = { onClick} 
					      	inline
					      	>
					        { labels[ 1 ] }
					      </Radio>{' '}

					      <Radio 
					      	name = { name } 
					      	value = { values[ 2 ] }
					      	onClick = { onClick} 
					      	inline
					      	>
					        { labels[ 2 ] }
					        
					      </Radio>{' '}
				    </FormGroup>

				    </Form>
        	</Col>
				</Row>
    	</Grid>

    );
}

HttpSelector.propTypes = {
	bgcolor: PropTypes.string.isRequired,
	checked: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	group: PropTypes.string.isRequired,
	labels: PropTypes.string,
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	values: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}

HttpSelector.defaultProps ={
	

}

export default HttpSelector;

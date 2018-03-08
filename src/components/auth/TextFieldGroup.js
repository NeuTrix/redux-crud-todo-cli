import React from 'react';
import PropTypes from 'prop-types';

import { 
  Col, ControlLabel, Form, FormControl,
  FormGroup, HelpBlock, Row 
} from 'react-bootstrap';

const options = {
	label, 
	name, 
	onChange, 
	placeholder, 
	type 
}

const style = { margin: 15 }
const styleErr = { color: 'red' }

// +++++++++   +++++++++ 

const TextFieldGroup = (options) => {

	 <Col style = { style } >

		<ControlLabel> { label } </ControlLabel>

		<FormControl
			name =  { name }
			placeholder =  { `Enter your ${ label }` }
			type =  { type }
			onChange =  { onChange }
		/>

		<FormControl.Feedback />

		{ errors &&  
			<HelpBlock style = { styleErr } > 
				{errors} 
			</HelpBlock>
		}

	</Col>

}
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { 
  Col, ControlLabel, Form, FormControl,
  FormGroup, HelpBlock, Row 
} from 'react-bootstrap';

const style = { margin: 15 }
const styleErr = { color: 'red' }

// +++++++++   +++++++++ 

const TextFieldGroup = ({ errors, label, name, onChange, placeholder, type }) => {

	 <Col style = { style } >

		 <div className = { classnames('form-group', { 'has-error': errors })} >

			<ControlLabel> { label } </ControlLabel>

			<FormControl
				name =  { name }
				placeholder =  { `Enter your ${ label }` }
				type =  { type }
				onChange =  { onChange }
			/>

			<FormControl.Feedback />

			{ errors &&  
				<HelpBlock style = { styleErr } > {errors} </HelpBlock> 
			}

		</div>
	</Col>
}

TextFieldGroup.propTypes = {
	errors: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

TextFieldGroup.defaulProps = {
	type: 'text',
	onChange: f => f
}


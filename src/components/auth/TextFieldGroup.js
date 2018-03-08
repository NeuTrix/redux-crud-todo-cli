import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { 
	Col, ControlLabel, FormControl, HelpBlock
} from 'react-bootstrap';

const style = { margin: 10 }
const styleErr = { color: 'red' }

// +++++++++   +++++++++ 

const TextFieldGroup = ({ errors, label, name, onChange, placeholder, type, value }) => {

	return (
		 <Col style = { style } >

			 <div className = { classnames('form-group', { 'has-error': errors })} >

				<ControlLabel> { label } </ControlLabel>

				<FormControl
					name =  { name }
					onChange =  { onChange }
					placeholder =  { placeholder }
					type =  { type }
					value = { value }
				/>

				<FormControl.Feedback />

				{ errors &&  
					<HelpBlock style = { styleErr } > { `WARNING: ${ errors }!.  Please re-${ placeholder }` } </HelpBlock> 
				}

			</div>
		</Col>
	);
};

TextFieldGroup.propTypes = {
	errors: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
}

TextFieldGroup.defaultProps = {
	type: 'text',
	onChange: f => f
}

export default TextFieldGroup


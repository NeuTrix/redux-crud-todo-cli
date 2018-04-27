import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FormControl } from 'react-bootstrap';

const style = {
	color: '#steelblue',
	backgroundColor: 'whitesmoke',
	height: 15,
	width: '100%',
	padding: 10,
}
const TextFieldGroup = (props) => {

	const { errors, label, placeholder } = props

	return (
		 <div className = { classnames('form-group', { 'has-error': errors }) } >

			{ label && <h3> { label } </h3> }

			<input
				className = 'control box mat'
				style = { style }
				name =  { props.name }
				onChange =  { props.onChange }
				placeholder =  { placeholder }
				type =  { props.type }
				value = { props.value }
			/>

			{ errors &&  
				<span id = 'helpBlock' style = {{ color: 'tomato' }} > 
				{ `WARNING: ${ errors }!. Please re-${ placeholder }` } 
				</span> 
			}

		</div>
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
};

TextFieldGroup.defaultProps = {
	name: `default`,
	onChange: f => alert(`default error: see TextFieldGroup`),
	type: 'text',
};

export default TextFieldGroup;


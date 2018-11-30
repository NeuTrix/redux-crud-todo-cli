import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

const propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,

	color: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	variant: PropTypes.string,
};

const defaultProps = {
	color: 'primary',
	placeholder: '',
	type: 'text',
	variant: 'body2',
}

const InputFieldRequired = (props) => {
	const {
		color,
		label,
		name,
		placeholder,
		onChange,
		type,
		variant,
	} = props;

	return (
		<FormControl>
			<InputLabel>
				<Typography variant={variant} color={color}>
					{label}
				</Typography>
			</InputLabel>
			<Input
				name={name}
				required
				placeholder={placeholder}
				type={type}
				onChange={onChange}
			/>
		</FormControl>
	);
};

InputFieldRequired.propTypes = propTypes;
InputFieldRequired.defaultProps = defaultProps;

export default InputFieldRequired;

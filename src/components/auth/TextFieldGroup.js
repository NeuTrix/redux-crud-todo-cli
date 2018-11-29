import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';

import { withStyles } from '@material-ui/core/styles';

// +++++++++  COMPONENNT  +++++++++
const TextFieldGroup = (props) => {
	const { classes, placeholder } = props;

	return (
		<Input
			classes={{
				focused: classes.focused,
				root: classes.root, 
			}}
			name={props.name}
			error={true}
			onChange={props.onChange}
			placeholder={placeholder}
			type={props.type}
			value={props.value}
		/>
	);
};

TextFieldGroup.propTypes = {
	className: PropTypes.string.isRequired, // from styled-components
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

TextFieldGroup.defaultProps = {
	className: 'TextFieldGroup',
	name: 'default',
	onChange: f => alert('default error: see TextFieldGroup'),
	type: 'text',
};

const styles = {
	root: {background: 'red'},
	focused: {
		background: 'orange',
		color: 'orange',
	},
}
export default withStyles(styles)(TextFieldGroup);

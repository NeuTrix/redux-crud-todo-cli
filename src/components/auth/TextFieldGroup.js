import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { colors } from '../../helpers/cssConstants';
import { withStyles } from '@material-ui/core/styles';


// +++++++++  CSS  +++++++++

// +++++++++  COMPONENNT  +++++++++
const TextFieldGroup = (props) => {
	const { className, classes, placeholder } = props;

	return (
		<div className={classes.grid} >

			<div className={classes.title}> 
				{ props.label && ( <h3> { props.label } </h3> )} 
			</div>

			<TextField
				className={classes.inputField}
				name={props.name}
				onChange={props.onChange}
				placeholder={placeholder}
				type={props.type}
				value={props.value}
			/>
		</div>
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
	grid: {
		display: 'grid',
		gridTemplateAreas:
			`
				" title "
				" input " 
			`,
	},

	inputField: {
		color: `${colors._charcoal}`,
		fontSize: '1.0em',
		gridArea: 'input',
		textIndent: 10,
	},

	title: {
		gridArea: 'title',
	},

}
export default withStyles(styles)(TextFieldGroup);

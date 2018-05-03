import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
// custom
import { colors } from '../../helpers/cssConstants'

// +++++++++  CSS  +++++++++ 

const Grid = styled.div `
	/* mobile view */
	display: grid;
	grid-template-areas: 
		" title "
		" input "
	;
`;

const Input = styled.input `
	grid-area: input;
	text-indent: 10px;
	color: ${ colors._charcoal };
`;

const Title = styled.div `
	grid-area: title;
`;

const HelpBlock = styled.span `
	color: red;
`;

// +++++++++  COMPONENNT  +++++++++ 

const TextFieldGroup = (props) => {

	const { className, errors, placeholder } = props

	return (
		 <Grid className = { classnames( `${ className } form-group`, { 'has-error': errors }) } >

		 <Title className= 'engr' >
			{ props.label && <h3> { props.label } </h3> }
		 </Title>

			<Input
				className = 'mat'
				name =  { props.name }
				onChange =  { props.onChange }
				placeholder =  { placeholder }
				type =  { props.type }
				value = { props.value }
			/>

			{ errors &&  
				<HelpBlock id = 'helpBlock'  > 
				{ `WARNING: ${ errors }!. Please re-${ placeholder }` } 
				</HelpBlock> 
			}

		</Grid>
	);
};

TextFieldGroup.propTypes = {
	className: PropTypes.string.isRequired, // from styled-components
	errors: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

TextFieldGroup.defaultProps = {
	className: 'TextFieldGroup',
	name: `default`,
	onChange: f => alert(`default error: see TextFieldGroup`),
	type: 'text',
};

export default TextFieldGroup;


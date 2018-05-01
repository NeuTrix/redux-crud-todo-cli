import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BasicButton = ({ className, bgColor, color, name }) => {

	const Button = styled.button `
		font-weight: bold;
		height: 30px;
		width: 80px;
		border: 1px solid grey;
		border-radius: 4px;
	`;

	return (
		<Button className= { `BasicButton ${ className } mat` } >
			{ name }
		</Button>  
	)
}

BasicButton.propTypes = {
	className: PropTypes.string.isRequired, // for styled-component
	name: PropTypes.string.isRequired, // altenative name for
}

BasicButton.defaultProps = {
	className: 'BasicButton',
	name: 'name Me!'
}

export default BasicButton
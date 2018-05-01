import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BasicButton = ({ className, bgColor, color, name }) => {

	const Button = styled.button `
		${ color },
		borderColor: ${ color },
		backgroundColor: ${ bgColor },
	`;

	return (
		<Button className= { `BasicButton ${ className } btn mat` } >
			{ name }
		</Button>  
	)
}

BasicButton.propTypes = {
	bgColor: PropTypes.string, // indicates link color
	color: PropTypes.string, // indicates link color
	className: PropTypes.string.isRequired, // for styled-component
	name: PropTypes.string.isRequired, // altenative name for
}

BasicButton.defaultProps = {
	className: 'BasicButton',
	color: 'lightgrey',
	name: 'Name Me!',
}

export default BasicButton
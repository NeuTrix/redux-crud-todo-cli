import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkedButton = ({ className, bgColor, color, name, path }) => {

	const StyledLink = styled(Link)`
		justify-self: center;
	`;

	const Button = styled.button`
		color: ${color};
		borderColor: ${bgColor};
	`;

	return (
		<StyledLink className= { `${ className }` } to = { path } >
			<Button className= {`btn mat opac`} >
				{ name }
			</Button>  
		</StyledLink >
	)
}

LinkedButton.propTypes = {
	bgColor: PropTypes.string, // indicates grid bgColor
	color: PropTypes.string, // indicates grid color
	name: PropTypes.string.isRequired, // altenative name for
	path: PropTypes.string.isRequired, // indicates link path
}

LinkedButton.defaultProps = {
	name: 'Name Me!',
	path: '#',
}

export default LinkedButton
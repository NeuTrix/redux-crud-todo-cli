import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkedButton = (props) => {

	const StyledLink = styled(Link)`
		justify-self: center;
		text-decoration: none;
	`;

	const Button = styled.button`
		color: ${props.color};
		border: 4px solid ${props.color};
		background-color: ${props.bgColor};
		height: 35px;
		width 90px;
	`;

	return (
		<StyledLink className= { props.className } to = { props.path }>
			<Button className= {`ctr btn mat`}> { props.name } </Button>  
		</StyledLink>
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
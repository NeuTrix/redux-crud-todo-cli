import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

// ========= Component

const Rank = (props) => {
	let _rank; // task priority 

	const handleChange = (event) => {
		event.preventDefault();
		props.updateRank(props._id, _rank.value);
	};

	return (

		 <FormControl
			bsSize = 'sm'
			componentClass = "select" 
			defaultValue = {props.currRank}
			onChange = { handleChange } 
			inputRef = { (value) => _rank = value } >

			<option value = 'High'>High</option>
			<option value = 'Med'>Med</option>
			<option value = 'Low'>Low</option>

		</FormControl>
	);
}; 

// ========= Props  

Rank.propTypes = {
	currRank: PropTypes.string.isRequired,
	_id: PropTypes.string.isRequired,
	updateRank: PropTypes.func.isRequired
};

Rank.defaultProps = {
	currRank: 'default',	
	_id: 'default',
	updateRank: f => f
};

export default Rank;
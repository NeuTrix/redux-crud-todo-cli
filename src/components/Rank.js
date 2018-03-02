// used for setting priority rank of todo components
import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const Rank = (props) => {
	let _rank; // task priority 

	const handleChange = (event) => {
		event.preventDefault ();
		props.updateRank (props._id, _rank.value);
		props.editTodo (props._id, { rank: _rank.value });
	};

	return (
		<FormControl
			className= 'rank' 
			bsSize = 'sm'
			componentClass = "select" 
			defaultValue = {props.currRank}
			onChange = { handleChange } 
			inputRef = { (value) => _rank = value } 
		>
			<option value = 'High'>High</option>
			<option value = 'Med'>Med</option>
			<option value = 'Low'>Low</option>
		</FormControl>
	);
}; 

Rank.propTypes = {
	currRank: PropTypes.string.isRequired,
	editTodo: PropTypes.func.isRequired,
	updateRank: PropTypes.func.isRequired,
	_id: PropTypes.string.isRequired
};

Rank.defaultProps = {
	currRank: 'default',	
	editTodo: f => f,
	updateRank: f => f,
	_id: 'default'
};

export default Rank;
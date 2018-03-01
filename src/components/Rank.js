import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

// ========= Component

const Rank = (props) => {
	let _rank; // task priority 

	const handleChange = (event) => {
		event.preventDefault ();
		props.updateRank (props._id, _rank.value);
		props.editTodo (props.api, props._id, { rank: _rank.value });
	};

	return (
		<FormControl
			className= 'rank' 
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
	api: PropTypes.string.isRequired,
	currRank: PropTypes.string.isRequired,
	editTodo: PropTypes.func.isRequired,
	_id: PropTypes.string.isRequired,
	updateRank: PropTypes.func.isRequired
};

Rank.defaultProps = {
 	api: 'https://redux-todo-api.herokuapp.com/api/todos',
	currRank: 'default',	
	editTodo: f => f,
	updateRank: f => f,
	_id: 'default'
};

export default Rank;
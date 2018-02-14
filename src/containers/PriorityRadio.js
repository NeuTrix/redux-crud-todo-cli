import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap'

// ========= Component

const PriorityBtn = (props) => {
	let _rank; // task priority 

	const handleChange = (event) => {
		event.preventDefault();
		props.updateRank(props.id, _rank.value);
	};

	return (

		 <FormControl
				bsSize = 'sm'
				componentClass = "select" 
				defaultValue = { props.currRank }
				onChange = { handleChange } 
				inputRef = { (value) => _rank = value } >

				<option value = 'H'>H</option>
				<option value = 'M' >M</option>
				<option value = 'L'>L</option>

      </FormControl>
	);
}; 

// ========= Props  

PriorityBtn.propTypes = {
	currRank: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	updateRank: PropTypes.func.isRequired
};

PriorityBtn.defaultProps = {
	currRank: 'M',	
	id: 'default',
	updateRank: f => f
};

export default PriorityBtn;
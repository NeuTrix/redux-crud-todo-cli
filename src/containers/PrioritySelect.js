import React from 'react';
import PropTypes from 'prop-types';

//============================================================

const PriorityBtn = (props) => {
	let _rank;

	const handleChange = (event) => {
		event.preventDefault();

		props.updateRank(props.id, _rank.value);
	};

	return (
		<form >
			<select 
				onChange= { handleChange } 
				ref= { (value) => _rank = value }
			>
				<option value={props.currRank}>{props.currRank}</option>
				<option value='High'>High</option>
				<option value='Med' >Med</option>
				<option value='Low'>Low</option>
			</select>
		</form >
	);
}; //end Container

//============================================================

PriorityBtn.propTypes = {
	currRank: PropTypes.string.isRequired,
	updateRank: PropTypes.func.isRequired,
	id: PropTypes.string
};

PriorityBtn.defaultProps = {
	updateRank: f => f,
	currRank: 'Med',
};

//============================================================

export default PriorityBtn;
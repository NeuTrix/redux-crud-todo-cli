import React from 'react';
import PropTypes from 'prop-types';

// +++++++++ CSS  +++++++++ 

const style = {
	basic: {
		display: 'flex',
		justifyContent: 'center',
		color: 'lightgrey', 
		border: '1px solid lightgrey', 
		backgroundColor: 'white' 
	},

	glyph: { color: 'tomato' }
}

// +++++++++ COMPONENT  +++++++++ 

const DeleteBtn = (props) => {

	const handleDelete = (e) => {
		e.preventDefault();
		// allow restricted global use of `confirm`
		// eslint-disable-next-line
		let _confirmed = confirm(`Do you want to delete the task : \n\t  "${props.task}" ?` ) 
		if (_confirmed) {
			props.deleteTodo(props._id)
		} 
	}

	return (
		<button onClick= { handleDelete } style = { style.basic } > 
			<i 
				className = "fa fa-trash fa-lg" 
				style = { style.glyph } 
			> </i>
		</button>
	);
};

DeleteBtn.propTypes = {
	deleteTodo: PropTypes.func.isRequired,
	_id: PropTypes.string.isRequired,
	task: PropTypes.string.isRequired,
};

DeleteBtn.defaultProps = {
	deleteTodo: f => alert('default fn. Check deleteTodo props.') ,
	_id: 'default',
 	task: 'default',
};

export default DeleteBtn;
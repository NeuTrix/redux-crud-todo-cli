import React from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';

// +++++++++ CSS  +++++++++ 

const style = {

	basic: {
		color: 'lightgrey', 
		border: '1px solid lightgrey', 
		backgroundColor: 'white' 
	},

	glyph: {
		color: 'pink', 
		paddingTop: 4 
	}
}

// +++++++++ COMPONENT  +++++++++ 

const DeleteBtn = (props) => {

	const handleDelete(e) => {
		e.preventDefault();
		// allow restricted global use of `confirm`
		// eslint-disable-next-line
		let _confirmed = confirm(`Do you want to delete the task : \n\t  "${props.item.task}" ?` ) 
		if (_confirmed) {
			props.deleteTodo(props.item._id)
		} 
	}

	return (
		<button 
			className= { 'btn btn-sm' }
			style = { styleBtn }
			onClick= { handleClick } 
		> 
			<Glyphicon glyph = 'remove' style  = { styleGlyph } /> 
		</button>
	);
};

DeleteBtn.propTypes = {
	deleteTodo: PropTypes.func.isRequired,
	_id: PropTypes.string.isRequired,
	task: PropTypes.string.isRequired,
};

DeleteBtn.defaultProps = {
	deleteTodo: f => 	alert('default fn.  Check deleteTodo props.') ,
	_id: 'default',
 	task: 'default',
};

export default DeleteBtn;
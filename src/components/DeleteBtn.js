import React from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';

const DeleteBtn = (props) => {

	const handleClick = (event) => {
		event.preventDefault();
		// allow restricted global use of `confirm`
		//eslint-disable-next-line
		let _confirmed = confirm(`You are deleting the task : \n\t  "${props.task}" \n  Are you sure ?` ) 
			
		if (_confirmed) {
			return props.deleteTodo(props._id);
		} 
	};

	const styleGlyph = { 
		color: 'pink', 
		// fontSize: '1.5em', 
		paddingTop: 4 
	}

	const styleBtn = { 
		color: 'lightgrey', 
		border: '1px solid lightgrey', 
		backgroundColor: 'white' 
	}

	return (

		<Button 
			className= { 'btn btn-sm' }
			style = { styleBtn }
			onClick= { handleClick } 
		> 
			<Glyphicon glyph = 'remove' style  = { styleGlyph } /> 

		</Button>
		
	);
};

DeleteBtn.propTypes = {
	task: PropTypes.string.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	_id: PropTypes.string.isRequired
};

DeleteBtn.defaultProps = {
 	task: "default",
	deleteTodo: f => f,
	_id: 'default',
};

export default DeleteBtn;
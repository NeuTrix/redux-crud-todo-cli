import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Delete = styled.div `
	color: pink;
`;

const DeleteBtn = (props) => {

	const handleDelete = (e) => {
		e.preventDefault();
		// allow restricted global use of `confirm`
		// eslint-disable-next-line
		let _confirmed = confirm(`Do you want to delete the task : \n\t  "${props.task}" ?` ) 
		if (_confirmed) {
			props.deleteTodo(props.id)
		} 
	}

	return (
		<Delete 
			className = {`.${props.className} ctr engr fa fa-trash fa-2x`} 
			onClick= { handleDelete } > 
		</Delete>
	);
};

DeleteBtn.propTypes = {
	deleteTodo: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	task: PropTypes.string.isRequired,
};

DeleteBtn.defaultProps = {
	deleteTodo: f => alert('default fn. Check deleteTodo props.') ,
	id: 'default',
 	task: 'default',
};

export default DeleteBtn;
// vendor
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// custom
import { createTodo } from '../../actions/createActions';
import { deleteTodo } from '../../actions/deleteActions';
import { editTodo } from '../../actions/editActions';
import { fetchTodos } from '../../actions/readActions';
import requireAuth from '../../helpers/requireAuth';


// custom

// +++++++++  CSS  +++++++++ 

class TodoPage extends Component {

	render() {

		return (
			<div>
				TodoPage is here!
			</div>
			)
	}

}

// +++++++++  COMPONENT  +++++++++ 


// +++++++++  PROPS  +++++++++ 

TodoPage.propTypes = {
	createTodo:    		PropTypes.func.isRequired,
	deleteTodo:    		PropTypes.func.isRequired,
	fetchTodos:    		PropTypes.func.isRequired,
	isAuthenticated: 	PropTypes.bool,
	todoArray: 				PropTypes.array.isRequired,
	user: 						PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: 	state.authApi.isAuthenticated,
		todoArray: 				state.todos,
		user: 						state.authApi.user,
	};
}; 

const mapDispatchToProps = (dispatch) => {
	return {
		createTodo: (task) => { dispatch (createTodo (task)); },
		deleteTodo: (_id) => { dispatch (deleteTodo (_id)); },
		editTodo: (_id, task) => { dispatch (editTodo (_id, task)); },
		fetchTodos: () => 		{ dispatch(fetchTodos()); },
	};
}; 

export default connect (mapStateToProps, mapDispatchToProps) (TodoPage);


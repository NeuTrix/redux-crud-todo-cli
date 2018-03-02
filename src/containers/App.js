import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../containers/TodoList';
import TodoForm from '../components/TodoForm';
import Header from '../components/Header';
import Login from '../components/Login';
import { connect } from 'react-redux';
import { createTodo } from '../actions/createActions';
import { Route, Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'
import { startState } from '../actions/readActions';

const main ={


}

class App extends Component {
	
	componentDidMount() {
		this.props.startApp();
	}

	render() {
		return (
			<Row>

			<Col>
			</Col>

			<Col>
				<Route path = '/login' component = { Login } />
			</Col>

			<Col>
			</Col>


			
					<Header/>		
				<Col className="App">
					<Route 
						path = '/todos' 
						render = { () =>  
							<TodoForm createTodo = { this.props.createTodo } />
						} 
					/> 
				</Col>
			</Row>
		);
	}
} 
					{/*<TodoList todoArray = { this.props.todoArray } />*/}

App.propTypes = { 
	createTodo:    PropTypes.func.isRequired,
	todoArray: 	PropTypes.array.isRequired
};

App.defaultProps = {
	createTodo: f => f,
	todoArray: [ ]
};

const mapStateToProps = (state) => {
	return {
		todoArray: state.todos
	};
}; 

const mapDispatchToProps = (dispatch) => {
	return {
		createTodo: (task) => { dispatch (createTodo (task)); },
		startApp: () => { dispatch(startState()); }
	};
}; 

export default connect(mapStateToProps, mapDispatchToProps)(App);

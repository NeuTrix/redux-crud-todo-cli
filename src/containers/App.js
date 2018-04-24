import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import image from '../assets/futureBack.png';
import './App.css';

import AboutPage from '../components/AboutPage';
import FlashMessageList from '../components/flash/FlashMessageList';
import Header from '../containers/Header';
import HomePage from '../components/HomePage';
import LoginPage from '../components/auth/LoginPage';
import RegisterPage from '../components/auth/RegisterPage';
import TaskCounter from '../components/TaskCounter';
import TodoList from '../containers/TodoList';
import TodoForm from '../components/TodoForm';
import requireAuth from '../helpers/requireAuth';

import { connect } from 'react-redux';
import { createTodo } from '../actions/createActions';
import { Route } from 'react-router-dom';
import { fetchTodos } from '../actions/readActions';
import { Col, Grid, Row } from 'react-bootstrap';

const gridStyle = {
	display: 'grid',
	gridTemplateColumn: '1fr',
	gridTemplateRows: '50px 50px 1fr 50px',
	gridTemplateAreas: ' "header" "new_todo" "main" ',
	// gridTemplateAreas: ' "header" "new_todo" "main" "select_view" ',
// };

// const appStyle = {
	// paddingTop: 60,
	// backgroundImage: 'url('+ image +')',
	// backgroundAttachment: 'fixed',
	// backgroundPosition: 'center',
	// backgroundImageSize: 'cover',
	// backgroundSize:  'cover',
	// height: '100%',
	// paddingBottom:400
}

const placement = {
	header: { gridArea: 'header' },
	new_todo : { gridArea: 'new_todo'},
	main: { gridArea: 'main' },
	// select_view: { gridArea: 'select_view'},
}

const bgstyle = {

};

const styleCounter = {
	// position: 'sticky', 
	// top: 50,
	// backgroundColor: 'navy',
	// marginBottom: 40,
};

// +++++++++   +++++++++ 

class App extends Component {

	componentDidMount() {
		if (this.props.isAuthenticated) { 
			return this.props.fetchTodos(); 
		}
	}

	render() {

		const TodosPage = (

			<div id = 'todosPage' style = { placement.main }  >	
				<Col >
					<TaskCounter 
					style = { styleCounter } 
						todos = { this.props.todoArray } 
						fetchTodos = { this.props.fetchTodos } 
					/>
				</Col>

				<Col>
					<TodoForm 
						createTodo = { this.props.createTodo } 
						owner = { this.props.user._id }
						style = { { position: 'fixed'}}
					/>
				</Col>

				<Col>
					<TodoList todoArray = { this.props.todoArray } />
				</Col>

			</div>	
		);

		return (
			<div className = 'App'  id = 'app_grid' style = { gridStyle  } >

				<div id = 'app_header'  style = { placement.header } >
					<Route  path = '/' component = { Header } />
				</div>

				<div id = 'app_message' style = { placement.main } >
					<FlashMessageList/>
				</div>

				<div id = 'app_main' style = { placement.main } >
					<Route exact path = '/' component = { HomePage } />
					<Route path = '/about' component = { AboutPage } />
					<Route path = '/login' component = { LoginPage } />
					<Route path = '/register' component = { RegisterPage } />
					<Route exact path = '/todos' component = { 
							requireAuth(ReactDom.render = (props) => TodosPage) 
						} 
					/>
				</div>

			</div>

		);
	}
} 

// +++++++++   +++++++++ 

App.propTypes = { 
	createTodo:    PropTypes.func.isRequired,
	fetchTodos:    PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
	todoArray: 	PropTypes.array.isRequired,
	user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.authApi.isAuthenticated,
		todoArray: state.todos,
		user: state.authApi.user,
	};
}; 

const mapDispatchToProps = (dispatch) => {
	return {
		createTodo: (task) => { dispatch (createTodo (task)); },
		fetchTodos: () => { dispatch(fetchTodos()); }
	};
}; 

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import image from '../assets/futureBack.png';

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

const style = {
	display: 'grid',
	gridTemplateColumn: '1fr',
	gridTemplateRows: '1fr 5fr 1fr 1fr',
	gridTemplateAreas: ' "header" "form" "main" "view" ',

	padding: 10,
};

const placement = {
	header: { gridArea: 'header' },
	form : { gridArea: 'form'},
	main: { gridArea: 'main' },
	view: { gridArea: 'view'},
}

const bgstyle = {
	backgroundImage: 'url('+ image +')',
	backgroundAttachment: 'fixed',
	backgroundPosition: 'center',
	backgroundImageSize: 'cover',
	backgroundSize:  'cover',
	paddingBottom:400
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
			return 	this.props.fetchTodos(); 
		}
	}

	render() {

		const TodosPage = (
			<Row >
				<Col style = { styleCounter } >
					<TaskCounter 
						todos = { this.props.todoArray } 
						fetchTodos = { this.props.fetchTodos } 
					/>
				</Col>
				<Col>
					<TodoForm 
						createTodo = { this.props.createTodo } 
						owner = { this.props.user._id }
					/>
				</Col>
				<Col>
					<TodoList todoArray = { this.props.todoArray } />
				</Col>
			</Row>
		);

		return (
			<div style = { style } >

			<Grid style = { bgstyle } fluid = {true}  >

				<Row>
					<Col xs = { 12 }  >
					<div placement = { placement.header} >
						<Route path = '/' component = { Header } />
						</div>
					</Col>
				</Row>

				<Row style = { { paddingTop: 60 } } >

					<Col>
						<FlashMessageList/>
					</Col>

					<Col >
						<Route exact path = '/' component = { HomePage } />
						<Route path = '/about' component = { AboutPage } />
						<Route path = '/login' component = { LoginPage } />
						<Route path = '/register' component = { RegisterPage } />
						<Route 
							exact path = '/todos' 
							component = { 
								requireAuth(ReactDom.render = (props) => TodosPage) 
							} 
						/>
					</Col>

				</Row>
			</Grid>
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

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDom from 'react-dom';
import { Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import FlashMessageList from './components/messages/FlashMessageList';
import Home from './components/main/Home';
import LoginContainer from './components/auth/LoginContainer';
import { logout } from './actions/loginActions';
import NavBar from './components/main/NavBar';
import RegisterPage from './components/auth/RegisterPage';
import requireAuth from './helpers/requireAuth';
import TodoPage from './components/todos/TodoPage';

const propTypes = {
	authApi: PropTypes.instanceOf(Object).isRequired,
	classes: PropTypes.instanceOf(Object).isRequired,
	logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	authApi: state.authApi,
});

function App(props) {
	const { authApi, logout, classes } = props;
	const isAuth = authApi.isAuthenticated;

	return (
		<div className={`grid ${classes.grid}`}>
			<CssBaseline />
			<NavBar isAuth={isAuth} logout={logout} />
			<div className={`messages ${classes.messages}`}>
				<FlashMessageList />
			</div>
			<div className={`main ${classes.main}`}>
				<Route exact path="/" render={() => <Home authorized={isAuth} />} />
				<Route path="/login" component={LoginContainer} />
				<Route path="/register" component={RegisterPage} />
				<Route
					exact
					path="/todos"
					component={requireAuth(ReactDom.render = () => (<TodoPage />))}
				/>
			</div>
		</div>
	);
}

const styles = () => ({
	grid: {
		display: 'grid',
		fontFamily: 'arial',
		gridGap: '10px',
		gridTemplateAreas: `   
			" messages "  
			" main " 
		`,
		marginTop: '50px',
		padding: '0px 10px 0px 10px',
	},
	main: {
		display: 'grid',
		gridArea: 'main',
		justifyContent: 'center',
		paddingTop: 40,
	},
	messages: { gridArea: 'messages' },
});

App.propTypes = propTypes;

export default connect(mapStateToProps, { logout })(withStyles(styles)(App));

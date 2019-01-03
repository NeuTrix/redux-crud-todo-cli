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
// import RegisterPage from './components/auth/RegisterPage';
import RegistrationContainer from './components/auth/RegistrationContainer';
import requireAuth from './helpers/requireAuth';
import TodoContainer from './components/todos/TodoContainer';

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
	const testMessages = [ 'One', 'Two', 'Three'].reverse().map(msg => {
		return (<div className={classes.test}>
					{msg}
			</div>)
	})

	return (
		<div className={`grid ${classes.grid}`}>
			<CssBaseline />
			<NavBar isAuth={isAuth} logout={logout} />
			<div className={classes.messages}>
				<FlashMessageList />
			</div>
		
			<div className={classes.main}>
				<Route exact path="/" render={() => <Home authorized={isAuth} />} />
				<Route path="/login" component={LoginContainer} />
				<Route path="/register" component={RegistrationContainer} />
				<Route
					exact
					path="/todos"
					component={requireAuth(ReactDom.render = () => (<TodoContainer />))}
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
			"main" 
		`,
		// gridTemplateColumns: '1fr 9fr',
		marginTop: '50px',
		padding: '0px 10px 0px 10px',
	},
	main: {
		display: 'grid',
		gridArea: 'main',
		justifyContent: 'center',
		paddingTop: 40,
	},
	messages: {
		bottom: 10,
		left: 15,
		display: 'inline-grid',
		gridArea: 'messages',
		marginTop: 10,
		position: 'fixed',
		zIndex: 10000,
	},

	msg: {
		bottom: '10px',
		display: 'inline-grid',
		gridArea: 'msg',
		left: '15px',
		opacity: '.85',
		position: 'fixed',
		zIndex: 10000,
	},

	test: {
		width: '200px',
    background: 'orangered',
		height: '100px',
		margin: 5,
    zIndex: '1000000',
    boxShadow: 'black',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    color: 'white',
    fontSize: '2em',
	}
});

App.propTypes = propTypes;

export default connect(mapStateToProps, { logout })(withStyles(styles)(App));

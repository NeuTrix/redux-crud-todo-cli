// core react
import React from 'react';
import ReactDom from 'react-dom';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faBars,
	faChartLine,
	faChartBar,
	faCheckSquare,
	faCog,
	faEllipsisH,
	faTasks,
	faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import FlashMessageList from './components/messages/FlashMessageList';
import Home from './components/main/Home';
import LoginPage from './components/auth/LoginPage';
import MenuDrawer from './components/main/MenuDrawer';
// import Navigation from './main/Navigation';
// import NavTest from './components/main/NavTest';
import RegisterPage from './components/auth/RegisterPage';
import TodoPage from './components/todos/TodoPage';
// functions
import { logout } from './actions/loginActions';
import requireAuth from './helpers/requireAuth';


// fontawesome imports and other styles

// add to fontawesome library for the app scope
library.add(fab, faBars, faChartLine, faChartBar,
	faCog, faCheckSquare, faEllipsisH, faTasks, faTachometerAlt);

// ===> CSS
const Grid = styled.div`
  grid-template-areas:   
    " navBar " 
    " messages "  
    " main "  
  ;
  grid-template-rows: auto;
  grid-gap: 10px;

  display: grid;
  font-family: arial;
  margin-top: 50px;
  padding: 0px 10px 0px 10px;
`;
const Messages = styled.div`grid-area: messages;`;
const Main = styled.div`grid-area: main;`;
// material-ui custom styling

// ==== main Component
function App(props) {
	const { authApi, handleLogout } = props;
	const auth = authApi.isAuthenticated; // boolean val to pass down to children

	return (
		<Grid className="App">
			<CssBaseline />
			<MenuDrawer auth={auth} logout={handleLogout} />
			<Messages className="Messages">
				<FlashMessageList />
			</Messages>
			<Main className="Main">
				<Route exact path="/" render={() => <Home authorized={auth} />} />
				<Route path="/login" component={LoginPage} />
				<Route path="/register" component={RegisterPage} />
				<Route
					exact
					path="/todos"
					component={requireAuth(ReactDom.render = () => (<TodoPage className="TodoPage" />))}
					// component={requireAuth(ReactDom.render = props => (<TodoPage className="TodoPage" />))}
				/>
			</Main>
		</Grid>
	);
}
// ===== Props
App.propTypes = {
	authApi: PropTypes.instanceOf(Object).isRequired,
	handleLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	handleLogout: () => { dispatch(logout()); },
});

const mapStateToProps = state => ({
	authApi: state.authApi,
});
// =====
export default connect(mapStateToProps, mapDispatchToProps)(App);

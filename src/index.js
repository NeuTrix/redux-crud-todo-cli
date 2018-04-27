import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider }  from 'react-redux';
import jwtDecode from 'jwt-decode';
import store from './store/store';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import App from './containers/App';
import setAuthorizationToken from './components/auth/setAuthToken';
import { setCurrentUser } from './actions/loginActions';

let root = document.getElementById('root');
let token = localStorage.jwtToken;

if (token) {
	setAuthorizationToken(token);
	store.dispatch(setCurrentUser(jwtDecode(token)));
} 

ReactDOM.render(
	<Provider store = { store } >
		<Router>
			<Route path = '/' component = { App } />
		</Router>
	</Provider>, root
);

registerServiceWorker();

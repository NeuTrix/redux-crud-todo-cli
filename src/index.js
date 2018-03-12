import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './containers/App';
import setAuthorizationToken from './components/auth/setAuthToken'

import { Provider }  from 'react-redux';
import store from './store/store';

import { BrowserRouter as Router, Route } from 'react-router-dom';

let root = document.getElementById('root')

setAuthorizationToken(localStorage.jwtToken);

ReactDOM.render(
	
	<Provider store = { store } >
		<Router>
			<Route path = '/' component = { App } />
		</Router>
	</Provider>, root
);

registerServiceWorker();

import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
import styled from 'styled-components';

import setAuthorizationToken from './components/auth/setAuthToken';
import { setCurrentUser } from './actions/registerActions';
import App from './components/App';

let root = document.getElementById('root');
let token = localStorage.jwtToken;

if (token) {
	setAuthorizationToken(token);
	store.dispatch(setCurrentUser(jwtDecode(token)));
} 

const Store = styled(Provider) `
  margin: 0px;
  padding: 0px;
  font-family: sans-serif;
`;

ReactDOM.render(
	<Store store = { store } >
		<Router>
			<Route path = '/' component = { App } />
		</Router>
	</Store>, root
);

registerServiceWorker();

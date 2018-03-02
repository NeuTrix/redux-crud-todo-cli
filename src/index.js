import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './containers/App';

import { Provider }  from 'react-redux';
import store from './store/store';

import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
	
	<Router>
		<Provider store = { store } >
			<App/> 
		</Provider>
	</Router>,

	document.getElementById('root')
);

registerServiceWorker();

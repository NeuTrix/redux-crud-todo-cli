import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import HomePage from './containers/HomePage';

import { Provider }  from 'react-redux';
import store from './store/store';


ReactDOM.render(
	
	<Provider store = { store } >
		<HomePage/> 
	</Provider>,

	document.getElementById('root')
);

registerServiceWorker();

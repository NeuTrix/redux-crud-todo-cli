import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './containers/App';

import { Provider }  from 'react-redux';
import store from './store/store';


ReactDOM.render(
	
	<Provider store = { store } >
		<App/> 
	</Provider>,

	document.getElementById('root')
);

registerServiceWorker();

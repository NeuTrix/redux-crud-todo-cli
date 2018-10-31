import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';


it('renders without crashing', () => {
	const div = document.createElement('div');
	
	ReactDOM.render(
		<Provider store= { store } >
			<Router>
				<App />
			</Router>
		</Provider>
		, div);
});

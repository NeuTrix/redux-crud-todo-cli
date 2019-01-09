import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// redux store
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
// security & authorization
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from './components/auth/setAuthToken';
import { setCurrentUser } from './actions/registerActions';
// define MUI themes
import { MuiThemeProvider } from '@material-ui/core/styles';
import myTheme from './helpers/myTheme';
// main application
import App from './App';

const token = localStorage.jwtToken;

if (token) {
	setAuthorizationToken(token);
	store.dispatch(setCurrentUser(jwtDecode(token)));
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
      <MuiThemeProvider theme={myTheme}>
        <Route path="/" component={App} />
      </MuiThemeProvider>
    </Router>
	</Provider>, document.getElementById('root'),
);

registerServiceWorker();

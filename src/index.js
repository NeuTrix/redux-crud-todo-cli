import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import styled from 'styled-components';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';

import setAuthorizationToken from './components/auth/setAuthToken';
import { setCurrentUser } from './actions/registerActions';
import App from './App';
// import material-ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


import deepOrange from '@material-ui/core/colors/deepOrange';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';



const root = document.getElementById('root');
const token = localStorage.jwtToken;

if (token) {
	setAuthorizationToken(token);
	store.dispatch(setCurrentUser(jwtDecode(token)));
}

const Store = styled(Provider)`
  margin: 0px;
  padding: 0px;
  font-family: sans-serif;
`;

const options = {
	palette: {
		primary: {
			main: lightBlue['500'],
		},
    secondary: {
			main: lightGreen['500'],
		},
		tertiary:  {
			main: deepOrange['500'],
		},
	},
	sizes: {
		drawerWidth: 264,
	},
	status: {
		danger: 'orangered',
	},
	typography: {
		useNextVariants: true,
	},
};

const theme = createMuiTheme(options);

ReactDOM.render(
	<Store store={store}>
		<Router>
      <MuiThemeProvider theme={theme}>
        <Route path="/" component={App} />
      </MuiThemeProvider>
    </Router>
	</Store>, root,
);

registerServiceWorker();

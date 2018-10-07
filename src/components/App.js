// core react
import React from 'react';
import ReactDom from 'react-dom';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// components
import FlashMessageList from './messages/FlashMessageList';
import Home from './main/Home';
import LoginPage from './auth/LoginPage';
import { logout } from '../actions/loginActions';
import NavBar from './main/NavBar';
import RegisterPage from './auth/RegisterPage';
import requireAuth from '../helpers/requireAuth';
import styled from 'styled-components';
import TodoPage from './todos/TodoPage';
// import './material.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// fontawesome imports and other styles
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faChartLine, faChartBar, faCheckSquare, faCog, faEllipsisH, faTasks, faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
// add to fontawesome library for the app scope
library.add( fab, faBars, faChartLine, faChartBar, faCog, faCheckSquare, faEllipsisH, faTasks, faTachometerAlt,
);
// ===> CSS
const Grid =styled.div `
  display: grid;
  grid-template-areas:   
    " nav-bar " 
    " messages "  
    " main "  
  ;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  grid-template-rows: auto;
  font-family: arial;
  padding: 0px 10px 0px 10px;
`;
const Messages = styled.div `grid-area: messages;`;
const Main =styled.div `grid-area: main;`;

const options = {
  palette: {
      primary: lightBlue,
      secondary: lightGreen,
    },
  status: {
    danger: 'orange',
  },
}

const theme = createMuiTheme(options);
// Component
const App =(props) => {
  const { authApi, logout} = props;
  const auth = authApi.isAuthenticated;

  return (
    <MuiThemeProvider theme={ theme } >
      <Grid className='App' >
        <CssBaseline/>
        <NavBar auth={ auth } logout={ props.logout } />
        <Messages className='Messages'>
          <FlashMessageList/>
        </Messages>
        <Main className='Main'>
          <Route exact path='/' render={ () =>
            <Home authorized={ auth } />}
          />
          <Route path='/login' component={ LoginPage } />
          <Route path='/register' component={ RegisterPage } />
          <Route
            exact path='/todos'
            component={ requireAuth(ReactDom.render = (props) =>
              <TodoPage className='TodoPage' />
            ) }
          />
        </Main>
      </Grid>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  authApi: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return { logout: () => { dispatch(logout()); } };
};

const mapStateToProps = (state) => {
  return { authApi: state.authApi };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

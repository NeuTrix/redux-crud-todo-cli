// core react
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// fontawesome imports and other styles
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faChartLine,
  faCheckSquare,
  faCog,
  faEllipsisH,
  faTasks
} from '@fortawesome/free-solid-svg-icons';
// import './material.css';
import { logout } from '../actions/loginActions';
import requireAuth from '../helpers/requireAuth';
import styled from 'styled-components';
// components
import FlashMessageList from './messages/FlashMessageList';
import Home from './main/Home';
import LoginPage from './auth/LoginPage';
import NavBar from './main/NavBar';
import RegisterPage from './auth/RegisterPage';
import { Route } from 'react-router-dom';
import TodoPage from './todos/TodoPage';
// add to fontawesome library for the app scope
library.add(
  fab,
  faBars,
  faChartLine,
  faCog,
  faCheckSquare,
  faEllipsisH,
  faTasks
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
const Messages =styled.div `grid-area: messages;`;
const Main =styled.div `grid-area: main;`;
// Component
const App =(props) => {
  const { authApi, logout} = props;
  const auth = authApi.isAuthenticated;
  return (
    <Grid className='App' >

        <NavBar
          auth={ auth }
          logout={ props.logout }
        />

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
          )}
        />
      </Main>

    </Grid>
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

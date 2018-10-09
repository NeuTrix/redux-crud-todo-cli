import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import NavBar from './NavBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components';
import logo from '../../assets/logo-white.png';

// apply semantic tag
const Nav = styled.nav ` 
  grid-area: navBar;
  display: inline-grid;
  margin: 0px 0px 40px 0px;
`

// navbar logo
const Logo = styled.img `
	grid-area: logo;
	max-width: 75px;
	place-self: center left;
`;

// material-ui styling
const StyledAppBar = withStyles({
  root: {
    width: '100%',
    color:'#fafafa'
  }
})(AppBar);



const Navigation = (props) => {
  // const { classes } = props;
  return (
    <Nav>
      <StyledAppBar >
        <NavBar/>
      </StyledAppBar>
    </Nav >
  )
}

export default Navigation;

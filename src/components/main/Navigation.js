import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components';
import logo from '../../assets/done-blue.png';

// apply semantic tag
const Nav = styled.nav ` 
  grid-area: navBar;
  grid-template-areas: " menu search logo ";
  display: inline-grid;
  margin: 0px 0px 40px 0px;
`
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
        <ToolBar>
          <Typography 
          style={{gridArea: 'search'}}
          variant='display6' color='inherit' >
            Hello
          </Typography >
        </ToolBar>
      </StyledAppBar>
    </Nav >
  )
}

export default Navigation;

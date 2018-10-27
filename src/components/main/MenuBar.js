import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const StyledIconButton = withStyles({
  root: {
    gridArea: 'menu',
    color: '#fafafa'
  }
})(IconButton);

export default function MenuBar(props) {
  return (
    <StyledIconButton>
      <MenuIcon/>
    </StyledIconButton>
  )
};
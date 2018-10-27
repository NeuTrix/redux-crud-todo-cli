import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const StyledSwitch = withStyles({
  root:{
    gridArea: 'login'
  }
})(Switch);

export default function LoginSwitch(props) {
  return (
    <StyledSwitch/>
  )
};

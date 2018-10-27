import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const StyledSwitch = withStyles({
  root:{
    gridArea: 'login'
  }
})(Switch);

export default function LoginSwitch(props) {
  const { auth, logout } = props;
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch aria-label='LoginSwitch'/>
        }
        label= {auth ? 'Logout' : 'Login'}
      />
    </FormGroup>
  )
};

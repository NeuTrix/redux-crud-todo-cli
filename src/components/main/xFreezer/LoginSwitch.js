import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class LoginSwitch extends Component {

  // onLogout(e) {
	// 	e.preventDefault();
	// 	this.props.logout();
	// 	// context.router.history.push('/login');
  // };
  
  render() {
    const { auth, logout } = this.props;

    return (
      <FormGroup>
        <FormControlLabel
          control={
            <Switch 
              checked={ auth } 
              // onChange={ this.onLogout }
              aria-label='LoginSwitch'
            />
          }
            label={ auth ? 'Logout' : 'Login' }
          />
      </FormGroup>
    )
  }
};


LoginSwitch.propTypes = {
  auth: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

LoginSwitch.defaultProps = {
  auth: false,
  logout: (f) => 'Default action: Navbar logout fn',
};

export default LoginSwitch

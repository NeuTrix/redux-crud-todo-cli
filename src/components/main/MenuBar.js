import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Navigation from './Navigation';

const styles = (theme) => ({
  root: {
    color: '#fafafa',
    // color: 'orangered',
    // gridArea: 'search',
    // !!! add media query condition for showing
  },
  burger: {
    color: '#fafafa'
  },

  dropDown: {
    background: 'lime', // !!! set to  theme background color
    width: '100%',
    position: 'absolute',
    top: 50,
    left: 0,
    ['@media (max-width: 600px)'] : {
      display: 'none' // !!! do this conditionally for @media
    }
  }
});

class MenuBar extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isShowing: false, // !!! use this to toggle btw menu button and dropdown
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    // this.setState({})
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.root } >
        {/* <IconButton > */}
        <IconButton className={ classes.burger } >
          <MenuIcon onClick={ this.handleClick } />
        </IconButton>
        <div className={ classes.dropDown } > 
          <Navigation />
        </div>
      </div>
    )
  }
};

export default withStyles(styles)(MenuBar)

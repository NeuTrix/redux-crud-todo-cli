import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Navigation from './Navigation';

const styles = (theme) => ({
  root: {
    color: '#fafafa',
    gridArea: 'nav',
    // add media query condition for showing
  },

  dropDown: {
    background: 'lime',
    color: 'orange',
    width: '100%',
    position: 'absolute',
    top: 50,
    left: 0,
    display: 'block',
    // display: 'none'
  }

});


const handleClick = (e) => {
  e.preventDefault();
  // alert('hello')
}


function MenuBar(props) {
  const { classes } = props;
  return (
    <div>
      <IconButton className={ classes.root } >
        <MenuIcon onClick={ handleClick } />
      </IconButton>
      <div className={ classes.dropDown } > 
        <Navigation />
      </div>
    </div>
  )
};

export default withStyles(styles)(MenuBar)

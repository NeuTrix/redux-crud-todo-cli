
import React from 'react'
import logo from '../../assets/logo-white.png';
// === @MUI ===
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const StyledAvatar = withStyles({
  root: {
    gridArea: 'brandLogo',
    maxWidth: '75px',
    color: 'steelblue',
  }
})(CardMedia);

export default function BrandLogo (props) {
  return (
    <StyledAvatar 
    className='brandLogo' 
    component='img'
    src={ logo } 
    alt='brand logo'/>
  )
}

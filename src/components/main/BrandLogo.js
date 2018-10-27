˝import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import logo from '../../assets/logo-white.png';
import CardMedia from '@material-ui/core/CardMedia';

const StyledAvatar = withStyles({
  root: {
    gridArea: 'brandLogo',
    color: 'steelblue',
    maxWidth: '75px',
  }
})(CardMedia);

export default function BrandLogo (props) {
  return (
    <StyledAvatar 
    className='brandLogo' 
    component='img'
    image={ logo }
    alt= 'brand logo'/>
  )
}

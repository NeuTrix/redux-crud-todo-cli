
import React from 'react'
import logo from '../../assets/logo-white.png';
// === @MUI ===
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const StyledAvatar = withStyles({
  gridArea: 'logo',
  maxWidth: '75px',
})(Avatar);

const BrandLogo = (props) => {
  return (
    <StyledAvatar className='logo' src={ logo } alt='brand logo'/>
  )
}

export default BrandLogo;

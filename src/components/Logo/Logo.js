import React from 'react'   
import logo from '../../assets/logo-1 1.png'
import { Link } from 'react-router-dom'
import routes from '../pages/routes';

const Logo = ({LogoWidth,LogoHeight,LogoStyle}) => {
  return (
    <Link to={routes.HomePage}>
      <div className={LogoStyle}>
        <img width={LogoWidth} height={LogoHeight} src={logo} alt='Logo' />
      </div>
    </Link>
  )
}
export default Logo
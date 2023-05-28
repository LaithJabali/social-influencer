import React from 'react'   
import logo from '../../assets/logo-1 1.png'
import { Link } from 'react-router-dom'

const Logo = ({LogoWidth,LogoHeight,LogoStyle}) => {
  return (
    <Link to={'./'}>
      <div className={LogoStyle}>
        <img width={LogoWidth} height={LogoHeight} src={logo} alt='Logo' />
      </div>
    </Link>
  )
}
export default Logo
import React from 'react'   
import logo from '../../assets/logo-1 1.png'

const Logo = ({LogoWidth,LogoHeight,LogoStyle}) => {
  return (
    <div className={LogoStyle}>
      <img width={LogoWidth} height={LogoHeight} src={logo} alt='Logo Image' />
    </div>
  )
}
export default Logo
import React from 'react'   
import logo from '../../assets/logo-1 1.png'

const Logo = ({LogoWidth,LogoHeight,LogoStyle}) => {
  return (
    <div className={LogoStyle}>
      <img width={LogoWidth} height={LogoHeight} src={logo} alt='Logo' />
    </div>
  )
}
export default Logo
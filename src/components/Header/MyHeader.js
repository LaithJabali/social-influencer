import React from 'react';
import style from './Header.module.css'
import Logo from '../Logo/Logo';
import {navLinks} from './data'
import NavBar from './NavBar';
import HeaderButtons from './HeaderButtons';
import {buttons} from './data';

const MyHeader = () => {
  return (
      <div className={style.container}>
        <div className={style.header}>
          <Logo LogoWidth={160} LogoHeight={90} LogoStyle={style.LogoStyle}/>
          <NavBar navLinks={navLinks} isFooter={false} />
          <HeaderButtons buttons={buttons} buttonClass={style.signButton}/>
        </div>
      </div> 
  )
}
export default MyHeader
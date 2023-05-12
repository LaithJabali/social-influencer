import React from 'react';
import style from './Header.module.css'
import MyLogo from '../Logo/Logo';
import {navLinks} from './data'
import NavBar from './NavBar';
import HeaderButtons from './HeaderButtons';


const MyHeader = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <MyLogo LogoWidth={160} LogoHeight={90} LogoStyle={style.LogoStyle}/>
          <NavBar navLinks={navLinks} />
          <HeaderButtons />
        </div>
      </div> 
      
    </>
  )
}

export default MyHeader



  
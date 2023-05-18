import React from 'react';
import style from './Header.module.css';
import Logo from '../Logo/Logo';
import { navLinks, buttons } from './data';
import NavBar from './NavBar';
import CustomButtons from '../CustomButtons';

const MyHeader = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Logo LogoWidth={160} LogoHeight={90} LogoStyle={style.LogoStyle} />
        <NavBar navLinks={navLinks} isFooter={false} />
        <div className={style.headerButtons}>
          <CustomButtons buttons={buttons} buttonClass={style.signButton} />
        </div>
      </div>
    </div>
  );
};

export default MyHeader;

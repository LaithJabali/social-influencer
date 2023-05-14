import React from 'react'
import {navLinks} from './data';
import NavBar from '../Header/NavBar';
import style from './Footer.module.css';

const FooterNavBar = () => {
  return (
    <div className={style.footerNavBar}>
        <NavBar navLinks={navLinks} isFooter={true}/>
    </div>
  )
}
export default FooterNavBar